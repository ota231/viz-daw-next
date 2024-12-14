import { Flex, Text} from '@/once-ui/components';

export default function Bye() {
    return (
        <Flex
        direction='column'>
            <Flex>
                <Text
                    as='h1'>
                Citations
                </Text>
                
            </Flex>

            <Flex
                as='ol'>
                <Text
                    id='1'
                    as ='li'>
                    Wikipedia contributors. “Digital Audio Workstation.” Wikipedia, 4 Nov. 2024, en.wikipedia.org/wiki/Digital_audio_workstation.
                </Text>
            </Flex>
        </Flex>
    );
}