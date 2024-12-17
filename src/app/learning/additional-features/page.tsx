import { Flex, Text, SmartLink, Grid, SmartImage, Button, Arrow } from '@/once-ui/components';
import {AdvancedDrumPattern} from '@/once-ui/instruments/AdvancedDrumPattern';

export default function AddMoreStuff() {
    return (
        <Flex
            direction='column'>
            <Flex
                as="header"
                paddingY='16'
                paddingX="16"
                justifyContent="center"
                alignItems="center"
                maxHeight={64}
                radius='l'
                background='transparent'
            >
                <Text
                    as="h1"
                    variant='heading-strong-xl'
                    align='center'>
                    Additional Features
                </Text>

            </Flex>

            <Flex
                borderStyle='solid-1'
                radius='s'>
                <Text
                    as='p'
                    variant='body-default-l'
                    padding='32'>
                    In addition to the basic elements for sound creation, instruments, there are other components used to mix and develop 
                    the sound. Here we add reverb, volume, distortion, panning and BPM (some of these don't 100% work). For simplicity, knobs and sliders were implemented for the entire sequence rather than for each individual instrument. 
                    You can probably imagine how things get more complicated as we add knobs and sliders per instrument: it becomes more difficult to navigate, even as a cited person. 
                    More advanced graphical components, such as EQ and compression, were not included due to the limitations of Tone.js.
                </Text>
            </Flex>

            <Flex
                fillWidth>
                <AdvancedDrumPattern />
            </Flex>


            <Flex
                margin='16'
                padding='16'
                justifyContent='right'
                fillWidth
            >
                <Button
                    id="next"
                    href='/learning/screen-reader'
                    variant="primary">
                    <Flex alignItems="center">
                        Next: Screen Reader
                        <Arrow trigger="#next" color='onSolid' />
                    </Flex>
                </Button>

            </Flex>

        </Flex>
    );
}
