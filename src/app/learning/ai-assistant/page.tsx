import { Flex, Text, SmartLink, Button, Arrow } from '@/once-ui/components';
export default function AIAssistant() {
    /*return (
        <div>
            <p>
                Features:
                Voice-controlled navigation
                Command interpretation for complex actions
                Predictive assistance based on user patterns
                Real-time audio description of interface elements
            </p>
            <p>
                "Adjust the EQ on the vocal track"
                "Lower the volume of the drum track"
                "Add reverb to the guitar"
                "Create a new MIDI track"
                "What's the current tempo?"
            </p>

        </div>
    )*/

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
                    What about AI ....?🤔
                </Text>

            </Flex>

            <Flex
                borderStyle='solid-1'
                radius='s'>
                <Text
                    as='p'
                    variant='body-default-l'
                    padding='32'>
                    Accessibility in DAWs has seen significant advancements, but there may be a lot of potential with the recent advancements in AI.
                    There isn't any published research yet on AI in DAWs, but there have been some snippets of what it could look like in industry software.
                    For example, <SmartLink
                        href='https://www.apple.com/newsroom/2024/05/logic-pro-takes-music-making-to-the-next-level-with-new-ai-features/'>
                        Logic Pro AI</SmartLink>
                    offers innovative AI-driven band session players that respond to feedback, enhancing the music creation process. Additionally, AI-powered
                    <SmartLink href="https://www.image-line.com/fl-studio-news/ai-mastering/">
                        audio mastering in FL Studio</SmartLink>  in FL Studio has been implemented to simplify the audio mastering process for users.
                    I also found <SmartLink
                        href='https://www.learnitect-ai.com/home/daw-ai-assistants'>
                        GPT-4-based assistants</SmartLink>
                    customized for different DAWs like FL Studio, Pro tools, FL studio and more.
                    Overall, there are huge possibilities for AI in audio production.<br /> <br />  

                    We have seen that AI assistants are capable of understanding the DAW workspace, so they are possibly of great use to visually impaired users.
                    Off the top of my head I can think of interaction via vocal commands, which may eliminate the need of a screen reader or more efficient version. 
                    It can also aid in the description of visual heavy elements, although a haptic device may be more suitable here because of the direct implication of vibrations 
                    as opposed to descriptions. <br /> <br />  
                    However, AI is also the subject of a lot of controversy. 
                    This technology must be implemented in a way that doesn't hamper on, but expand creativity. Furthermore, the environmental impact of AI and concerns 
                    about copyright must be considered as these technologies continue to develop.
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
                    href='/learning/reflection'
                    variant="primary">
                    <Flex alignItems="center">
                        Next: Reflection
                        <Arrow trigger="#next" color='onSolid' />
                    </Flex>
                </Button>

            </Flex>

        </Flex>
    );
}