'use client';

import React, { useState, useEffect, useRef } from 'react';
import * as Tone from "tone";
import { Flex, Button, Icon, Text } from '@/once-ui/components';
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


    const pianoNotes = [
        new Tone.Player('/sounds/piano_C4.mp3').toDestination(),
        new Tone.Player('/sounds/piano_E4.mp3').toDestination(),
        new Tone.Player('/sounds/piano_G4.mp3').toDestination(),
        new Tone.Player('/sounds/piano_C5.mp3').toDestination(),
    ];

    // Persistent Tone.Player instances
    const kickPlayer = useRef(new Tone.Player('/sounds/kick.wav').toDestination());
    const snarePlayer = useRef(new Tone.Player('/sounds/snare.wav').toDestination());
    const hihatPlayer = useRef(new Tone.Player('/sounds/hihat.wav').toDestination());
    const tomsPlayer = useRef(new Tone.Player('/sounds/toms.wav').toDestination());



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

    const [kickVolume, setKickVolume] = useState(50);
    const [snareVolume, setSnareVolume] = useState(50);
    const [hihatVolume, setHihatVolume] = useState(50);
    const [tomsVolume, setTomsVolume] = useState(50);

    const handleVolumeChange = (instrument: string, value: number) => {
        switch (instrument) {
            case 'Kick':
                setKickVolume(value);
                kickPlayer.current.volume.value = value * 100; // Tone.js volume is in decibels
                break;
            case 'Snare':
                setSnareVolume(value);
                snarePlayer.current.volume.value = value * 100;
                break;
            case 'Hi-hat':
                setHihatVolume(value);
                hihatPlayer.current.volume.value = value * 100;
                break;
            case 'Toms':
                setTomsVolume(value);
                tomsPlayer.current.volume.value = value * 100;
                break;
            default:
                break;
        }
    };

    const instrumentVolProperties = [
        { name: 'Kick', volume: kickVolume, setter: setKickVolume },
        { name: 'Snare', volume: snareVolume, setter: setSnareVolume },
        { name: 'Hi-Hat', volume: hihatVolume, setter: setHihatVolume },
        { name: 'Toms', volume: tomsVolume, setter: setTomsVolume },
    ];

    return (
        <Flex direction='row'
            padding='16'
            margin='32'>

            <Flex id='knobs'
                maxWidth={200}>
                <Flex
                    direction='column'>
                        
                    {instrumentVolProperties.map(({ name, volume, setter }) => (
                        <Flex className="instrument-control" key={name}>
                            <Flex
                                width={3}>
                                <Text
                                    variant='body-strong-m'>{name}</Text>
                            </Flex>
                            <Knob
                                min={0}
                                max={100}
                                value={volume}
                                onChange={(e) => handleVolumeChange(name, e.value)}
                                step={10}
                                size={50}
                                valueColor="#708090" rangeColor="#48d1cc"
                                textColor='white'
                            />
                        </Flex>
                    ))}
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
                        gap='4'>
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
                        alignItems='center'>

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
                        />
                    ))}
                </Flex>

                <Flex
                    alignItems='center'>
                    <Button
                        onClick={togglePlayback}
                        variant='primary'
                        size='s'
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
                        />
                    </Flex>

                </Flex>
            </Flex>

        </Flex>
    );
};

AdvancedDrumPattern.displayName = 'Drum Pattern';
export { AdvancedDrumPattern };