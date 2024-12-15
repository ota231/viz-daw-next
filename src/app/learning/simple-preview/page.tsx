import { Flex, Text, SmartLink, Grid, SmartImage, Button, Arrow } from '@/once-ui/components';
import { DrumPattern } from '@/once-ui/instruments/DrumPattern';

export default function SimplePreview() {
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
                    Simple Preview
                </Text>

            </Flex>

            <Flex
                borderStyle='solid-1'
                radius='s'>
                <Text
                    as='p'
                    variant='body-default-l'
                    padding='32'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    lots of things in DAWs
                    add fl studio example
                    limited time and abilitiy can't build an entire one from scratch
                    but can illustrate simple elements
                    disclaimer for reloading and such
                </Text>
            </Flex>

            <Flex
                fillWidth>
                <DrumPattern />
            </Flex>


            <Flex
                margin='16'
                padding='16'
                justifyContent='right'
                fillWidth
            >
                <Button
                    id="next"
                    href='/learning/additional-features'
                    variant="primary">
                    <Flex alignItems="center">
                        Next: Additional Features
                        <Arrow trigger="#next" color='onSolid' />
                    </Flex>
                </Button>

            </Flex>

        </Flex>
    );
}
