'use client';

import React, { useState, useEffect } from 'react';
import * as Tone from "tone";
import { Flex, Button, Icon } from '@/once-ui/components';


const DrumPattern = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const [kickPattern, setKickPattern] = useState(Array(16).fill(false));
    const [snarePattern, setSnarePattern] = useState(Array(16).fill(false));
    const [hihatPattern, setHihatPattern] = useState(Array(16).fill(false));
    const [tomsPattern, setTomsPattern] = useState(Array(16).fill(false));

    const kick = new Tone.Player('/sounds/kick.wav').toDestination();
    const snare = new Tone.Player('/sounds/snare.wav').toDestination();
    const hihat = new Tone.Player('/sounds/hihat.wav').toDestination();
    const toms = new Tone.Player('/sounds/toms.wav').toDestination();

    // Cleanup on component unmount
    useEffect(() => {
        const sequence = new Tone.Sequence(
            (time, stepIndex) => {
                if (kickPattern[stepIndex]) kick.start(time);
                if (snarePattern[stepIndex]) snare.start(time);
                if (hihatPattern[stepIndex]) hihat.start(time);
                if (tomsPattern[stepIndex]) toms.start(time);
            },
            Array.from({ length: 16 }, (_, i) => i), // 16 steps
            '16n' // Sixteenth notes
        );

        return () => {
            sequence.dispose();
        };
    }, [kickPattern, snarePattern, hihatPattern, tomsPattern]);

    const togglePlayback = async () => {
        await Tone.start(); // Initialize AudioContext

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
        <Flex direction="column" alignItems="center"
            fillWidth>
            {/* Kick Pattern */}
            <h2>Kick</h2>
            <Flex gap="4px">
                {kickPattern.map((isActive, index) => (
                    <Button
                        key={`kick-${index}`}
                        onClick={() => toggleStep(index, setKickPattern)}
                        style={{
                            backgroundColor: isActive ? '#BF3B30' : '#4E3B31', // Active: red, Inactive: brown
                            color: 'white',
                            width: '40px',
                            height: '40px',
                        }}
                    >
                        {index + 1}
                    </Button>
                ))}
            </Flex>

            {/* Snare Pattern */}
            <h2>Snare</h2>
            <Flex gap="4px">
                {snarePattern.map((isActive, index) => (
                    <Button
                        key={`snare-${index}`}
                        onClick={() => toggleStep(index, setSnarePattern)}
                        style={{
                            backgroundColor: isActive ? '#009B77' : '#4E3B31', // Active: teal, Inactive: brown
                            color: 'white',
                            width: '40px',
                            height: '40px',
                        }}
                    >
                        {index + 1}
                    </Button>
                ))}
            </Flex>

            {/* Hihat Pattern */}
            <h2>Hihat</h2>
            <Flex gap="4px">
                {hihatPattern.map((isActive, index) => (
                    <Button
                        key={`hihat-${index}`}
                        onClick={() => toggleStep(index, setHihatPattern)}
                        style={{
                            backgroundColor: isActive ? '#F6A600' : '#4E3B31', // Active: yellow, Inactive: brown
                            color: 'white',
                            width: '40px',
                            height: '40px',
                        }}
                    >
                        {index + 1}
                    </Button>
                ))}
            </Flex>

            {/* Toms Pattern */}
            <h2>Toms</h2>
            <Flex gap="4px">
                {tomsPattern.map((isActive, index) => (
                    <Button
                        key={`toms-${index}`}
                        onClick={() => toggleStep(index, setTomsPattern)}
                        style={{
                            backgroundColor: isActive ? '#3E5B91' : '#4E3B31', // Active: indigo, Inactive: brown
                            color: 'white',
                            width: '40px',
                            height: '40px',
                        }}
                    >
                        {index + 1}
                    </Button>
                ))}
            </Flex>
            <Flex padding='16'
                alignItems='center'
                margin='16'>
                <Button
                    onClick={togglePlayback}
                    variant='primary'
                    size='s'
                >
                    <Icon name={isPlaying ? 'stop' : 'play'} />
                </Button>
            </Flex>
        </Flex>
    );
};

DrumPattern.displayName = 'Drum Pattern';
export { DrumPattern };