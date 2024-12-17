import { Flex, Text, SmartLink, Grid, SmartImage, Button, Arrow } from '@/once-ui/components';

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
                    screen readers still rely on heavy user navigation and/or maybe simplified commands in the case of optimized accessibility scripts
                    technology that creates a sense of touch or physical sensation through vibration, force, or motion: example is vibration on ur phone when u receive a text. less cognitive overload.
                    Simulate parameter changes through tactile feedback
                    most of the interaction with instruments and music production software is digitized, making them more dysnfunctional for visually impaired folks.

                    Evaluating haptic technology in accessibility of digital audio workstations for visual impaired creatives.
                    - provide visually impaired musicians with a new way of producing music but also will provide academic research on material and technologies that can be used for future accessibility tools
                    - explore and examine these methods that can potentially lower the barriers of VI musicians and the wider VI community by proposing embodied and immersive haptic-focused accessibility tools.
                    - aims to identify the haptic feedback techniques that can best convey visually represented audio processing functions and, consequently, to suggest a machine learning algorithm that can enhance a long-term relationship between haptic feedback and VI users
                    - heavily graphic stuff: how do we represent sound effects such as compressor, reverb and delay in a haptic format that can be better understood
                    - two part methodology:
                    1. examine the relationship between the perception of sound, visual interaction on the screen and vibrotactile feedback, how the users are experiencing haptics and the degree to which it can be used as a solution to the discussed problems: lots of physics and sound.
                    ultimately create mapping of vibration motor to audio effect, for example: panning left center right to 3 vibrations
                    2. machine learning algotithm that automatically adjusts haptic feedback to audio effect. was initially just proposed here but i am skeptical of it with my knowledge as a computer and data science major. usually requires loads of data
                    to be of any use and this may not be feasible in this case where there are extremely specific audio functions we are looking at. user interviews and experiments are more reliable.

                    example reverb: more aspects to it not included, can become very cognitive heavy: Decay Time (Reverb Time)
                    room, decay, hi-cut, low-cut, bass, cross, damp
                    https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Reeverb%202.htm
                    off the top of my head: Decay Time → Vibration Duration: Longer reverb tails produce longer vibrations.
                    Room Size → Vibration Intensity: Larger virtual spaces can increase the strength or "spread" of the haptic feedback.

                    highly integrable: could be an app on the phone or device that comes with website. but again needs lot of work to actually be useful in industry and go beyond academic research.

                    even more mapping done (beyond scope of features we have discussed) in [5]: point estimation in automation graphs, sonification of peak level meters, haptic display of waveform amplitude
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
                    href='/learning/sonification'
                    variant="primary">
                    <Flex alignItems="center">
                        Next: Sonification + Audio Cues
                        <Arrow trigger="#next" color='onSolid' />
                    </Flex>
                </Button>

            </Flex>

        </Flex>

    );
}