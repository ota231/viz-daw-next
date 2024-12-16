import { Flex, Text, SmartLink, Grid, SmartImage, Button, Arrow } from '@/once-ui/components';

export default function ScreenReader() {
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
                            What's that like with a screen reader?
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
                            DAWs that use screen readers
                            Plugins and screen reader compatibility
                            add a screen reader and highlight inefficiency
                            how this highlights similar screen reader issues in DAWS
                            requires meticulous development: initially not any screen reader support, had to specify extra things in HTML
                        </Text>
                    </Flex>
        
                    <Flex
                        fillWidth>
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
                                Next: Screen Reader
                                <Arrow trigger="#next" color='onSolid' />
                            </Flex>
                        </Button>
        
                    </Flex>
        
                </Flex>

    );
}
