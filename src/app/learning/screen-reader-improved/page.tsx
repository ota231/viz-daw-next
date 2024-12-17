import { Flex, Text, SmartLink, InlineCode, Button, Arrow, SparkleFx } from '@/once-ui/components';

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
                    How about a more efficient screen reader?
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
                    Screen readers can be very slow given the amount of things happening in a DAW. However, accessibility scripts have been made to improve the efficiency of workflows while using a screen reader.
                    The case study of this project will be Flo Tools for Pro Tools. <SmartLink
                        href="/learning/citation#7"
                    >[7]</SmartLink> < br />< br />
                    Flo Tools was created as part of the assistive music technology program for visually impaired students at Berklee College of Music, with the goal of
                    providing them with the same opportunities as their sighted peers in the industry. Developed in response to students' frustrations, Flo Tools aims to improve
                    efficiency by streamlining tasks that are often tedious for blind users. Slau Halaatyn, a blind student, owner, and engineer in NYC with over 20 years of experience using
                    Pro Tools, describes Flo Tools as "having a sighted assistant next to me who can take in information, report it to me, and execute commands more quickly than I could if I had to navigate the
                    information myself."<SmartLink
                        href="/learning/citation#8"
                    >[8]</SmartLink> This capability is particularly crucial in fast-paced environments where quick actions are essential when working with clients. Flo Tools offers commands that report different
                    statuses, such as how many tracks are visible or hidden, tasks that would otherwise require manually clicking through each track. Instant access to commands via keyboard shortcuts significantly improves efficiency, making the workflow faster and more manageable.
                    Adapting these keyboard shortcuts to my implementation would involve commands like: < br /><br />
                    <InlineCode>
                        ctrl + shift + l = List All Instruments
                    </InlineCode>
                    <br />
                    <InlineCode>
                        ctrl + alt + i = Reset Pan to Default
                    </InlineCode>...
                    <br /><br />

                    talk about not having to develop skills because of accessiblity complaints: software choices should be dictated by needs not by accessiblity.
                </Text>
            </Flex>
            <Flex
                borderStyle='solid-1'
                radius='s'
                padding='16'
                margin='32'
                width={50}
                align='right'>
                <SparkleFx
                    speed="medium"
                    count={50}
                    trigger
                >
                    <Text
                        variant='body-default-s'
                        onSolid='accent-strong'>
                    "There are two diferent levels of accessibility... The frst
                    one was, like I said, make all the buttons readable to
                    a blind person and to their software. The second one is
                    to make it practical and... where you can be productive
                    and be just as fast as a sighted user, or as fast as possible
                    compared to a sighted user." - Aaron from [2]
                    </Text>
                </SparkleFx>
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