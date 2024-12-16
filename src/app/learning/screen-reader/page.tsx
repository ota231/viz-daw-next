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
                    Majority of my experiments and resulting conclusions I draw on screen readers are based on this paper:
                    <b>Understanding Audio Production Practices of People with Vision Impairments.</b> <br /><br />

                    They conduct interviews with 18 audio professionals and hobbyists with visual impairments to learn about the accessibility
                    of widely using tools, where they find thataccessible audio production involves: piecing together accessible and efficient
                    workflows through a combination of mainstream and custom tools; achieving professional competency through a steep learning curve in which domain knowledge and accessibility are inseparable; and facilitating learning and creating access by engaging in online communities of visually impaired audio enthusiasts.
                    <SmartLink
                        href="/learning/citation#2"
                    >[2]</SmartLink> <br /> <br />
                    As you can probably already tell, DAWs can become very complicated very fast; even with a simplified version can start to feel
                    overwhelming due to the sheer number of tools and options. For users with visual impairments, the most widespread workaround
                    is almost always a screen reader. For my simulation, I use NVDA <SmartLink
                        href="/learning/citation#3"
                    >[3]</SmartLink>  which folks in <SmartLink
                        href="/learning/citation#2"
                    >[2]</SmartLink>use, and which is also widely used on Windows systems. 
                    While some DAWs, such as Pro Tools and Logic, offer native screen reader support with accessibility features built into their design, others, like REAPER, 
                    depend on unofficial accessibility scripts. These scripts, while helpful, can break entirely when DAWs undergo updates that overhaul the user interface (and if you have used DAWs before, you know this happens pretty often). 
                    Plugins, which are third-party tools that extend DAW functionality, further complicate accessibility since their compatibility with screen readers depends on how the third party build their software. 
                    <br /> <br />
                    
                    On the development side, adding a screen reader to my own project revealed that I did not know as much about web development as I thought. For features like buttons, knobs and slids (all of which are basically what make up DAWS)
                    additional attributes need to be specified in the code to tell the screen reader to update the user when different changes are made. Additionally, you can imagine how long it may take for the reader to 
                    describe the entire screen, significantly slowing down the user's efficiency. 






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
