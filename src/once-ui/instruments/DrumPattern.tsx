'use client';

import React, { useState, useEffect, useRef} from 'react';
import * as Tone from "tone";
import { Flex, Button, Icon, Text } from '@/once-ui/components';


const DrumPattern = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [kickPattern, setKickPattern] = useState(Array(16).fill(false));
    const [snarePattern, setSnarePattern] = useState(Array(16).fill(false));
    const [hihatPattern, setHihatPattern] = useState(Array(16).fill(false));
    const [tomsPattern, setTomsPattern] = useState(Array(16).fill(false));
  
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
    };
  
    useEffect(() => {
      let step = 0;
  
      const scheduleStep = (time: number) => {
        setCurrentStep(step); // Update the UI to show the current step
        playStep(step); // Play sounds for the current step
  
        // Increment step and wrap around
        step = (step + 1) % totalSteps;
  
        // Schedule the next step
        Tone.Transport.scheduleOnce(scheduleStep, time + Tone.Time('16n').toSeconds());
      };
  
      // Start the scheduling if playing
      if (isPlaying) {
        Tone.Transport.scheduleOnce(scheduleStep, Tone.Transport.seconds);
        Tone.Transport.start();
      }
  
      // Cleanup on stop
      return () => {
        Tone.Transport.cancel();
        Tone.Transport.stop();
      };
    }, [isPlaying, kickPattern, snarePattern, hihatPattern, tomsPattern]);
  
    const togglePlayback = async () => {
      await Tone.start();
  
      if (isPlaying) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
    };
  
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