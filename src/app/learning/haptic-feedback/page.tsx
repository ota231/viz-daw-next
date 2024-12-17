import { Flex, Text, SmartLink, Button, Arrow } from '@/once-ui/components';
import Image from 'next/image';

export default function HapticFeedback() {
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
                    What about Audio Haptics?
                </Text>

            </Flex>

            <Flex
                borderStyle='solid-1'
                radius='s'>
                <Text
                    as='p'
                    variant='body-default-l'
                    padding='32'>
                    Screen readers still often require heavy user navigation or rely on users to remember a host commands provided through accessibility scripts.
                    This is where haptic technology comes in: it creates a sense of touch or physical sensation through vibration, force, or motion. A common example is the vibration you feel on your phone when you receive a text, which
                    informs you that you have received a text without any audio or visual stimuli.
                    Simulating parameter changes through haptic feedback (vibrations) can provide a more intuitive and accessible experience for users.
                    Thus, this can reduce the cognitive overload from just audio in a DAW.
                    In music production, haptic technology is more prevalent in academic research, rather than in practice, likely due to the added overhead of requiring separate devices alongside regular software.

                    However, as the music production process has moved away physical interactions with instruments to visual interactions with a computer, it is important to remember that physical stimuli can be a pivotal
                    part of the music production process, particularly for visually impaired individuals.

                    <br /><br />

                    In <SmartLink href="/learning/citation#4">[4]</SmartLink>, Karpodini evaluates the use of haptic technology in DAWs. She aims to identify the haptic
                    feedback techniques that can best convey visually represented audio processing functions and, consequently, to suggest a machine learning algorithm that can enhance a long-term relationship between haptic feedback and visually impaired users.

                    This methodology focuses mainly on very graphic elements such as EQ, compressor, reverb. Although my illustration shows some of these features
                    simply as 1 or 2 knobs, in practice these features tend to have more parameters involved. For example, the image below shows the default reverb plugin in FL Studio.
                    How do we represent sound effects such as compressor, reverb and delay in a haptic format that can be better understood by visually impaired users? <br /><br />
                    
                    Karpodini proposes a two part methodology: <br />
                    1. Examine the relationship between the perception of sound, visual interaction on the screen and vibrotactile feedback. Ultimately, this would create a mapping of the vibration motor to the audio effect. For example, panning left, center, right to 3 vibrations. <br />
                    2. Building a machine learning algorithm that automatically adjusts haptic feedback to audio effect. < br />
                    Karpodini has not built the machine learning algorithm yet, but based on my humble knowledge as a computer and data science undergraduate studet, I am skeptical on the feasibility of this approach.
                    Machine learning algorithms usually requires loads of diverse data to work with high probability. Given that there are extremely specific audio functions, and not a lot of visually impaired users,
                    my guess is that laborious user interviews and surveys would yield a more reliable mapping. 
                    For example, off the top of my head, I can map the room size property of reverb to vibration intensity and the decay time to vibration duration. The audio effects and the vibrations go hand-in-hand<br /><br />

                    Other researchers have also done some mappings, in <SmartLink href="/learning/citation#5">[5]</SmartLink> the following mappings are done: point estimation in automation graphs, sonification of peak level meters, haptic display of waveform amplitude
                </Text>
            </Flex>

            <Flex
                padding='32'
                alignItems='center'
                fillWidth>
                <Image
                    src="/images/reeverb2.png"
                    alt="FL Studio Reeverb"
                    style={{ borderRadius: '4px' }}
                    width={795}
                    height={242}
                />
            </Flex>


            <Flex
                margin='16'
                padding='16'
                justifyContent='right'
                fillWidth
            >
                <Button
                    id="next"
                    href='/learning/ai-assistant'
                    variant="primary">
                    <Flex alignItems="center">
                        Next: AI Assistant
                        <Arrow trigger="#next" color='onSolid' />
                    </Flex>
                </Button>

            </Flex>

        </Flex>

    );
}