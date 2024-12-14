import { Flex, Text, SmartLink, Grid, SmartImage, Button, Arrow } from '@/once-ui/components';

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
                    some text
                </Text>
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
                        Next: Let's Make things spicy
                        <Arrow trigger="#next" color='onSolid' />
                    </Flex>
                </Button>

            </Flex>

        </Flex>
    );
}

// <p>basic midi keyboard and drum pattern and maybe a track. all on loop</p>