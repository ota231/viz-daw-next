'use client';

import React, { useState, useEffect, useRef } from 'react';
import * as Tone from "tone";
import { Flex, Button, Icon, Text } from '@/once-ui/components';
import { Keyboard } from '@/once-ui/instruments/Keyboard';
import { useDrumPatterns } from '@/once-ui/instruments/InstrumentHooks';


const DrumPattern = () => {
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


    return (
        <Flex
            direction="column"
            alignItems="center"
            padding='16'
            margin='32'
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
            </Flex>
        </Flex>
    );
};

DrumPattern.displayName = 'Drum Pattern';
export { DrumPattern };