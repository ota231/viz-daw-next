'use client';

import React, { useState, useEffect, useRef } from 'react';
import * as Tone from "tone";
import { Flex, Button, Icon, Text, Grid, RadioButton } from '@/once-ui/components';
import { Keyboard } from '@/once-ui/instruments/Keyboard';
import { useDrumPatterns } from '@/once-ui/instruments/InstrumentHooks';
import { Knob } from 'primereact/knob';



const AdvancedDrumPattern = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const {
        kickPattern, setKickPattern,
        snarePattern, setSnarePattern,
        hihatPattern, setHihatPattern,
        tomsPattern, setTomsPattern,
        pianoPattern, setPianoPattern,
    } = useDrumPatterns();

    const reverb = useRef(new Tone.Reverb(3).toDestination()); // Initial reverb decay time
    const [reverbWet, setReverbWet] = useState(50); // Wet/dry mix (0-100)
    const [reverbDecay, setReverbDecay] = useState(3); // Decay time (1-10)


    const pianoNotes = [
        new Tone.Player('/sounds/piano_C4.mp3').connect(reverb.current),
        new Tone.Player('/sounds/piano_E4.mp3').connect(reverb.current),
        new Tone.Player('/sounds/piano_G4.mp3').connect(reverb.current),
        new Tone.Player('/sounds/piano_C5.mp3').connect(reverb.current),
    ];

    // Persistent Tone.Player instances
    const kickPlayer = useRef(new Tone.Player('/sounds/kick.wav').connect(reverb.current));
    const snarePlayer = useRef(new Tone.Player('/sounds/snare.wav').connect(reverb.current));
    const hihatPlayer = useRef(new Tone.Player('/sounds/hihat.wav').connect(reverb.current));
    const tomsPlayer = useRef(new Tone.Player('/sounds/toms.wav').connect(reverb.current));

    const totalSteps = 16;

    const playStep = (stepIndex: number) => {
        if (kickPattern[stepIndex]) {
            kickPlayer.current.stop();
            kickPlayer.current.start();
        }
        if (snarePattern[stepIndex]) {
            snarePlayer.current.stop();
            snarePlayer.current.start();
        }
        if (hihatPattern[stepIndex]) {
            hihatPlayer.current.stop();
            hihatPlayer.current.start();
        }
        if (tomsPattern[stepIndex]) {
            tomsPlayer.current.stop();
            tomsPlayer.current.start();
        }
        if (pianoPattern[stepIndex]) {
            const noteIndex = (stepIndex / 4);
            console.log('noteIndex', noteIndex);
            pianoNotes[noteIndex].stop();
            pianoNotes[noteIndex].start();
        }
    };

    useEffect(() => {
        // Stop the transport when playback is stopped
        if (!isPlaying) {
            Tone.Transport.stop();
            Tone.Transport.cancel();
            return;
        }

        // Schedule the steps to play
        const scheduleLoop = () => {
            Tone.Transport.scheduleRepeat((time) => {
                setCurrentStep((prevStep) => {
                    const nextStep = (prevStep + 1) % totalSteps;
                    playStep(nextStep);
                    return nextStep;
                });
            }, '16n'); // Schedule the next step every 16th note
            Tone.Transport.start();
        };

        if (isPlaying) {
            scheduleLoop();
        }

        return () => {
            Tone.Transport.stop();
            Tone.Transport.cancel();
        };

    }, [isPlaying]);

    const togglePlayback = async () => {
        await Tone.start();

        if (isPlaying) {
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
        }
    };

    const toggleStep = (index: number, patternSetter: React.Dispatch<React.SetStateAction<boolean[]>>) => {
        patternSetter((prevPattern) => {
            const newPattern = [...prevPattern];
            newPattern[index] = !newPattern[index];
            return newPattern;
        });
    };

    //bpm stuff
    const [bpm, setBpm] = useState(Tone.Transport.bpm.value);

    const handleBpmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newBpm = parseInt(event.target.value, 10);
        setBpm(newBpm);
        Tone.Transport.bpm.value = newBpm;
    };

    // volume + pan
    const [volume, setVolume] = useState(50); // 0-100 range for simplicity
    const [pan, setPan] = useState(0); // -1 to 1 for pan range

    // Handle Volume Knob Change
    const handleVolumeChange = (value: number) => {
        setVolume(value);
        console.log('Volume:', value); // Logs volume value
    };

    // Handle Pan Knob Change
    const handlePanChange = (value: number) => {
        setPan(value);
        console.log('Pan:', value); // Logs pan value
    };


    //Reverb
    const handleReverbWetChange = (value: number) => {
        setReverbWet(value);
        reverb.current.wet.value = value / 100; // 0-1 range for wet
    };

    const handleReverbDecayChange = (value: number) => {
        setReverbDecay(value);
        reverb.current.decay = value; // Set decay time
    };

    //distortion
    const [distortionAmount, setDistortionAmount] = useState(0.5);

    const distortion = new Tone.Distortion(distortionAmount).toDestination();

    const handleDistortionChange = (value: number) => {
        setDistortionAmount(value);
        distortion.distortion = value;
    };

    return (
        <Flex direction='row'
            padding='16'
            margin='32'>

            <Flex
                maxWidth={200}
                direction='column'>

                <Flex id='vols'
                    border='neutral-strong'
                    borderStyle='solid-1'
                    padding='8'
                    margin='8'
                    role="group"
                    aria-labelledby="vols-label">
                    <Flex direction='column'
                        alignItems='center'
                    >
                        <Knob
                            value={volume}
                            min={0}
                            max={100}
                            onChange={(e) => handleVolumeChange(e.value)}
                            showValue={true}
                            valueColor="#48d1cc" rangeColor="#708090"
                            textColor='white'
                            aria-label="Volume Control"
                            aria-live='assertive'
                        />
                        <Text>Volume</Text>
                    </Flex>

                    <Flex direction='column'
                        alignItems='center'>
                        <Knob
                            value={pan}
                            min={-1}
                            max={1}
                            onChange={(e) => handlePanChange(e.value)}
                            showValue={true}
                            valueColor="#48d1cc" rangeColor="#708090"
                            textColor='white'
                            aria-label="Pan Control"
                            aria-live='assertive'
                        />
                        <Text>Pan</Text>
                    </Flex>
                </Flex>

                <Flex
                    id='reverb'
                    direction="column" alignItems="center"
                    border='neutral-strong'
                    borderStyle='solid-1'
                    padding='8'
                    margin='8'
                    role="group"
                    aria-labelledby="reverb-label">
                    <Text variant="body-strong-l">Reverb</Text>
                    <input
                        type="range"
                        value={reverbWet}
                        onChange={(e) => handleReverbWetChange(Number(e.target.value))}
                        min={0}
                        max={100}
                        style={{ width: '150px', marginTop: '8px' }}
                        aria-label="Reverb Wet"
                        aria-live='assertive'
                    />
                    <Text variant="body-default-s">Wet: {reverbWet}%</Text>

                    <input
                        type="range"
                        value={reverbDecay}
                        onChange={(e) => handleReverbDecayChange(Number(e.target.value))}
                        min={1}
                        max={10}
                        style={{ width: '150px', marginTop: '8px' }}
                        aria-label="Reverb Decay"
                        aria-live='assertive'
                    />
                    <Text variant="body-default-s">Decay: {reverbDecay}s</Text>
                </Flex>

                <Flex
                    alignItems='center'
                    direction='column'
                    border='neutral-strong'
                    borderStyle='solid-1'
                    padding='8'
                    margin='8'
                    role="group"
                    aria-labelledby="reverb-label">
                    <Text variant="body-strong-l">Distortion</Text>
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={distortionAmount}
                        onChange={(e) => handleDistortionChange(parseFloat(e.target.value))}
                        aria-label="Distortion Amount"
                        aria-live='assertive'
                    />
                    <p>{`Amount: ${distortionAmount}`}</p>
                </Flex>

            </Flex>

            <Flex
                direction="column"
                align='right'
                alignItems="center"
                fillWidth
            >
                <Flex>
                    <Keyboard />
                </Flex>

                {[{ pattern: kickPattern, setter: setKickPattern, label: 'Kick' },
                { pattern: snarePattern, setter: setSnarePattern, label: 'Snare' },
                { pattern: hihatPattern, setter: setHihatPattern, label: 'Hi-Hat' },
                { pattern: tomsPattern, setter: setTomsPattern, label: 'Toms' }].map((instrument, rowIndex) => (
                    <Flex key={rowIndex}
                        border='neutral-strong'
                        borderStyle='solid-1'
                        direction='row'
                        padding='8'
                        gap='4'
                        aria-labelledby={`pattern-label-${rowIndex}`}>
                        <Flex
                            justifyContent='left'
                            width={3}
                            alignItems='center'>
                            <Text
                                variant='body-default-m'>{instrument.label}
                            </Text>
                        </Flex>
                        {instrument.pattern.map((isActive, stepIndex) => (
                            <Flex>
                                <Button
                                    key={stepIndex}
                                    onClick={() => toggleStep(stepIndex, instrument.setter)}
                                    aria-labelledby={`pattern-label-${rowIndex}`}
                                    aria-pressed={isActive}
                                    aria-label={`${instrument.label} Step ${stepIndex + 1} ${isActive ? "Active" : "Inactive"
                                        }`}
                                    style={{
                                        backgroundColor: isActive ? '#BF3B30' : '#4E3B31',
                                        color: 'white',
                                        width: '40px',
                                        height: '40px',
                                    }}
                                />
                            </Flex>
                        ))}
                    </Flex>
                ))}



                <Flex className="indicator-grid" padding="16" margin="16">
                    <Flex
                        justifyContent='left'
                        width={3}
                        alignItems='center'
                        >

                    </Flex>
                    {Array.from({ length: 16 }).map((_, index) => (
                        <div
                            key={`indicator-${index}`}
                            style={{
                                backgroundColor: currentStep === index ? '#FFF' : '#333',
                                width: '40px',
                                height: '10px',
                                margin: '2px',
                                borderRadius: '5px',
                            }}
                            aria-hidden="true"
                        />
                    ))}
                </Flex>

                <Flex
                    alignItems='center'>
                    <Button
                        onClick={togglePlayback}
                        variant='primary'
                        size='s'
                        aria-label={isPlaying ? "Stop Playback" : "Start Playback"}
                        style={{ background: '#4E3B31', color: 'white' }}
                    >
                        <Icon name={isPlaying ? 'stop' : 'play'} />
                    </Button>

                    <Flex direction="column" marginLeft="16"
                        alignItems='center'>
                        <Text variant="body-default-l">BPM: {bpm}</Text>
                        <input
                            type="range"
                            value={bpm}
                            min="60"
                            max="200"
                            onChange={handleBpmChange}
                            style={{
                                width: '80px',
                                marginTop: '8px',
                                textAlign: 'center',
                            }}
                            aria-label="Beats Per Minute (BPM)"
                            aria-live='assertive'
                        />
                    </Flex>

                </Flex>
            </Flex>

        </Flex>
    );
};

AdvancedDrumPattern.displayName = 'Drum Pattern';
export { AdvancedDrumPattern };