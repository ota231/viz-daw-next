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
                    lots of things in DAWs
                    limited time and abilitiy can't build an entire one from scratch
                    but can illustrate simple elements
                    disclaimer for reloading and such
                    for simplicity knobs, sliders done for entire sequence rather than per instrument
                    notice how things can become really complex really fast !
                    omitted tracks, here instruments are kind of like tracks.
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
