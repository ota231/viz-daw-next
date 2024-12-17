import { Flex, Text, SmartLink, Grid, SmartImage, Button, Arrow } from '@/once-ui/components';

export default function ScreenReaderImproved() {
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
                    How about a less inefficient screen reader?
                </Text>

            </Flex>

            <Flex
                borderStyle='solid-1'
                radius='s'
                padding='8'>
                <Text
                    as='p'
                    variant='body-default-l'
                    padding='32'>
                    Simple Preview
                    Flo Tools for Pro Tools: accessiblity script. assistive music technology program for visually impaired students at Berklee College of Music. Give students same opportunities as sighted peers in industry. Developed to improve efficiency and in response to students' frustration.
                    Slau Halaatyn, a blind student owner and engineer in NYC that has over 20 years of experience with Pro Tools as a blind user describes flo tools as "having a sighted assistant next to me who can take in information, report it to me and execute commands more quickly than I could if I had to navigate the information myself."
                    Have to act quickly with clients!
                    commands that report different status : how may tracks are showing? how many tracks are hidden? otherwise done manually by clicking through each and every track
                    instant access to commands via keyboard shortcuts improves efficiency greatly
                    commands adopted to my case:
                    - cmd: list all instruments, reset pan, mute instrument, increase volume, etc
                    cite flo tootls promo video and flo tools website: https://www.youtube.com/watch?v=-Hu_gTnXMzI, https://flotools.org/
                    OSARA for REAPER similar to flo tools
                    talk about not having to develop skills because of accessiblity complaints: software choices should be dictated by needs not by accessiblity.
                    "There are two diferent levels of accessibility... The frst
                    one was, like I said, make all the buttons readable to
                    a blind person and to their software. The second one is
                    to make it practical and... where you can be productive
                    and be just as fast as a sighted user, or as fast as possible
                    compared to a sighted user.” - Aaron def a good step towards the right direction
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
                    href='/learning/haptic-feedback'
                    variant="primary">
                    <Flex alignItems="center">
                        Next: Haptic Feedback
                        <Arrow trigger="#next" color='onSolid' />
                    </Flex>
                </Button>

            </Flex>

        </Flex>

    );
}

/**<div>
            <p>Simple Preview</p>
            <p>Flo Tools for Pro Tools, OSARA for REAPER</p>
            <p>DAW updates may disrupt screen reader scripts</p>
            <p>extract relevant information and report dynamically/on-demand</p>

            <p>
                <ul>
                    <li>Custom audio-descriptive interfaces</li>
                    <li>Enhanced semantic HTML</li>
                    <li>ARIA attributes for better screen reader support</li>
                </ul>
            </p>
        </div> */