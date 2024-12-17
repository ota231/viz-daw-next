import { Flex, Text, SparkleFx } from '@/once-ui/components';

export default function Reflection() {
    return (
        <Flex
        direction='column'
        alignItems='center'
        fillWidth>
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
                    Reflections
                </Text>

            </Flex>

            <Flex
                borderStyle='solid-1'
                radius='s'>
                <Text
                    as='p'
                    variant='body-default-l'
                    padding='32'>
                    <SparkleFx
                        speed="medium"
                        count={50}
                        trigger
                    >
                        This project was a real challenge for me as a developer. It pushed me to think more critically about how I can integrate accessibility into the 
                        software development process from the start, rather than treating it as an afterthought. I made the mistake of initially underestimating the time 
                        and effort it would take to build something new, especially when trying to incorporate accessibility. Coding took longer than I expected, but the 
                        experience taught me a ton, especially when it comes to bridging the gap between academic research and actual implementation. I realized firsthand 
                        why that bridge isn't always easy to cross: it's hard! On the flip side, I also really enjoyed getting back into audio production and reconnecting 
                        with that passion. This project is something I definitely want to continue working on and iterating, as there's a lot more I can do to improve and refine it.
                        To all the Music Abilities and Disabilities staff, thanks for the opportunity to do this!
                    </SparkleFx>
                </Text>
            </Flex>
        </Flex>
    );
}