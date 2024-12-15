'use client';

import React, { useState, useEffect } from 'react';
import * as Tone from "tone";
import { Flex, Button, Icon, Text } from '@/once-ui/components';


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
            Array.from({ length: 16 }, (_, i) => i),
            '16n'
        );

        return () => {
            sequence.dispose();
        };
    }, [kickPattern, snarePattern, hihatPattern, tomsPattern]);

    const togglePlayback = async () => {
        await Tone.Transport.start();

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
        <Flex direction="column"
            alignItems="center"
            padding='16'
            margin='32'
            fillWidth>

            {/* Kick Pattern */}
            <Flex
                direction='row'
                padding='4'>
                <Flex
                    justifyContent='left'
                    width={3}
                    alignItems='center'
                >
                    <Text
                        variant='body-default-m'>
                        Kick</Text>
                </Flex>
                <Flex
                    gap='4'>
                    {kickPattern.map((isActive, index) => (
                        <Button
                            key={`kick-${index}`}
                            onClick={() => toggleStep(index, setKickPattern)}
                            style={{
                                backgroundColor: isActive ? '#BF3B30' : '#4E3B31', // Active: red, Inactive: brown
                                color: 'white',
                                width: '40px',
                                height: '20px',
                            }}
                        >
                        </Button>
                    ))}
                </Flex>
            </Flex>

            {/* Snare Pattern */}
            <Flex
                direction='row'
                padding='4'>
                <Flex
                    justifyContent='left'
                    width={3}
                    alignItems='center'>
                    <Text
                        variant='body-default-m'>Snare</Text>
                </Flex>
                <Flex
                    gap='4'>
                    {snarePattern.map((isActive, index) => (
                        <Button
                            key={`snare-${index}`}
                            onClick={() => toggleStep(index, setSnarePattern)}
                            style={{
                                backgroundColor: isActive ? '#009B77' : '#4E3B31', // Active: teal, Inactive: brown
                                color: 'white',
                                width: '40px',
                                height: '20px',
                            }}
                        >
                        </Button>
                    ))}
                </Flex>
            </Flex>

            {/* Hihat Pattern */}
            <Flex
                direction='row'
                padding='4'>
                <Flex
                    justifyContent='left'
                    width={3}
                    alignItems='center'>
                    <Text
                        variant='body-default-m'>HiHat</Text>
                </Flex>
                <Flex
                    gap='4'>
                    {hihatPattern.map((isActive, index) => (
                        <Button
                            key={`hihat-${index}`}
                            onClick={() => toggleStep(index, setHihatPattern)}
                            style={{
                                backgroundColor: isActive ? '#F6A600' : '#4E3B31', // Active: yellow, Inactive: brown
                                color: 'white',
                                width: '40px',
                                height: '20px',
                            }}
                        >
                        </Button>
                    ))}
                </Flex>
            </Flex>

            {/* Toms Pattern */}
            <Flex 
                direction='row'
                padding='4'>
                <Flex
                    justifyContent='left'
                    width={3}
                    alignItems='center'>
                    <Text
                        variant='body-default-m'>Toms</Text>
                </Flex>
                <Flex
                    gap='4'>
                    {tomsPattern.map((isActive, index) => (
                        <Button
                            key={`toms-${index}`}
                            onClick={() => toggleStep(index, setTomsPattern)}
                            style={{
                                backgroundColor: isActive ? '#3E5B91' : '#4E3B31', // Active: indigo, Inactive: brown
                                color: 'white',
                                width: '40px',
                                height: '20px',
                            }}
                        >
                        </Button>
                    ))}
                </Flex>
            </Flex>
            <Flex padding='16'
                alignItems='center'
                margin='16'>
                <Button
                    onClick={togglePlayback}
                    variant='primary'
                    size='s'
                    style={{background: '#4E3B31', color: 'white'}}
                >
                    <Icon name={isPlaying ? 'stop' : 'play'} />
                </Button>
            </Flex>
        </Flex>
    );
};

DrumPattern.displayName = 'Drum Pattern';
export { DrumPattern };