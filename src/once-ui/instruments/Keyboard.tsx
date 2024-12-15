import React, { useState, useEffect } from 'react';
import { Flex, Button, Text } from '@/once-ui/components';
import * as Tone from "tone";


interface KeyboardProps {
    activeKeys: string[];
    onKeyPress: (note: string) => void;
}

const pianoKeys = [
    { note: 'C4', type: 'white' },
    { note: 'C#4', type: 'black' },
    { note: 'D4', type: 'white' },
    { note: 'D#4', type: 'black' },
    { note: 'E4', type: 'white' },
    { note: 'F4', type: 'white' },
    { note: 'F#4', type: 'black' },
    { note: 'G4', type: 'white' },
    { note: 'G#4', type: 'black' },
    { note: 'A4', type: 'white' },
    { note: 'A#4', type: 'black' },
    { note: 'B4', type: 'white' },
    { note: 'C5', type: 'white' },
];

const Keyboard: React.FC = () => {
    const [highlightedKey, setHighlightedKey] = useState<string | null>(null);

    /*    return (
           <Flex
               border="neutral-strong"
               borderStyle="solid-1"
               direction="row"
               padding="8"
               gap="4"
           >
               <Flex justifyContent="left" width={3} alignItems="center">
                   <Text variant="body-default-m">Key Name</Text>
               </Flex>
               {pianoKeys.map((key, index) => (
                   <Flex key={index} direction="column" alignItems="center">
                       <Text
                           style={{
                               backgroundColor: key.type === "white" ? "#FFF" : "#000",
                               color: key.type === "white" ? "#000" : "#FFF",
                               width: "40px",
                               height: "20px",
                               margin: "2px",
                               display: "flex",
                               justifyContent: "center",
                               alignItems: "center",
                           }}
                       >
                           {key.note}
                       </Text>
                   </Flex>
               ))}
           </Flex>
       ); */
    return (
        <Flex
            border="neutral-strong"
            borderStyle="solid-1"
            direction="column"
            padding="8"
            gap="4"
        >
            {/* Rows for each key */}
            {pianoKeys.map((key, keyIndex) => (
                <Flex key={keyIndex} direction="row" alignItems="center" gap="4">
                    {/* Key name on the left */}
                    <Text
                        style={{
                            backgroundColor: key.type === "white" ? "#FFF" : "#000",
                            color: key.type === "white" ? "#000" : "#FFF",
                            width: "40px",
                            height: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: "8px",
                        }}
                    >
                        {key.note}
                    </Text>

                    {/* 16 buttons in a row */}
                    <Flex direction="row" gap="4">
                        {Array.from({ length: 4 }).map((_, buttonIndex) => (
                            <Button
                                key={buttonIndex}
                                onClick={() => { /* handle button click */ }}
                                style={{
                                    backgroundColor: "#4E3B31",
                                    color: "white",
                                    width: "172px",
                                    height: "20px",
                                    borderRadius: "1px",
                                }}
                                size='s'
                            >
                            </Button>
                        ))}
                    </Flex>
                </Flex>
            ))}
        </Flex>
    );

};

Keyboard.displayName = 'Keyboard';
export { Keyboard };
