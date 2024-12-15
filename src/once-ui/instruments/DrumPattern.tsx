'use client';

import React, { useState, useEffect } from 'react';
import * as Tone from "tone";
import { Flex, Button, Icon, Text } from '@/once-ui/components';


const DrumPattern = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const [kickPattern, setKickPattern] = useState(Array(16).fill(false));
    const [snarePattern, setSnarePattern] = useState(Array(16).fill(false));
    const [hihatPattern, setHihatPattern] = useState(Array(16).fill(false));
    const [tomsPattern, setTomsPattern] = useState(Array(16).fill(false));

    // Drum players
    const kickPlayer = new Tone.Player('/sounds/kick.wav').toDestination();
    const snarePlayer = new Tone.Player('/sounds/snare.wav').toDestination();
    const hihatPlayer = new Tone.Player('/sounds/hihat.wav').toDestination();
    const tomsPlayer = new Tone.Player('/sounds/toms.wav').toDestination();

    useEffect(() => {
        // Schedule playback for each instrument
        const playStep = (time: number, stepIndex: number) => {
            if (kickPattern[stepIndex]) kickPlayer.start(time);
            if (snarePattern[stepIndex]) snarePlayer.start(time);
            if (hihatPattern[stepIndex]) hihatPlayer.start(time);
            if (tomsPattern[stepIndex]) tomsPlayer.start(time);
        };

        // Schedule a repeating sequence of 16 steps
        const id = Tone.Transport.scheduleRepeat((time) => {
            const currentStep = Math.floor((Tone.Transport.seconds * 4) % 16); // Sixteenth note resolution
            setCurrentStep(currentStep);
            playStep(time, currentStep);
        }, '16n');

        // Cleanup when component unmounts
        return () => {
            Tone.Transport.clear(id); // Clear the scheduled event
            Tone.Transport.stop(); // Stop the transport
        };
    }, [kickPattern, snarePattern, hihatPattern, tomsPattern]);


    // Toggle playback
    const togglePlayback = async () => {
        await Tone.start(); // Ensure Tone.js is ready
        if (isPlaying) {
            Tone.Transport.stop();
        } else {
            Tone.Transport.start();
        }
        setIsPlaying(!isPlaying);
    };

    // Toggle step in a specific pattern
    const toggleStep = (
        index: number,
        patternSetter: React.Dispatch<React.SetStateAction<boolean[]>>
    ) => {
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
            fillWidth>

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

            <Flex padding='16'
                alignItems='center'
                margin='16'>
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