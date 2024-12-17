import { Flex, Text, SmartLink, Button, Arrow } from '@/once-ui/components';
import { DrumPattern } from '@/once-ui/instruments/DrumPattern';

import Image from 'next/image';

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
                radius='s'
                direction='row'>
                <Flex>
                    <Text
                        as='p'
                        variant='body-default-l'
                        padding='32'>
                        For this project, I aimed to explore the accessibility of DAWs by immersing myself in the software development process and pushing the boundaries of how inclusive
                        my software development skills are. DAWs are pretty complex with tons of features, but given my limited time and resources, I focused on creating a pretty simplified snippet of a DAW.
                        The preview below is centered around instruments, inspired by the beginner FL Studio channel rack, shown below. More complex components like tracks/mixers are omitted from this rendering. You can also imagine that the instruments are tracks.
                        I use Tone.js <SmartLink href="/learning/citation#6">[6]</SmartLink>to generate the sounds and effects, so my implementation is also limited to the resources available in Tone.js.
                    </Text>
                </Flex>

            </Flex>

            <Flex
                direction='column'
                alignItems='center'
                padding='32'>
                <Image
                    src="/images/channelrack_main.png"
                    alt="FL Studio Channel Rack"
                    style={{ borderRadius: '4px' }}
                    width={650}
                    height={250}
                />
            </Flex>

            <Flex
                fillWidth
                alignItems='center'>
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
