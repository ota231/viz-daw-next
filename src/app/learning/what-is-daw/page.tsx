import { Flex, Text, SmartLink, Grid, SmartImage, Button, Arrow } from '@/once-ui/components';

export default function WhatIsDaw() {

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
                        What is a DAW?
                      </Text>
            
                    </Flex>

            <Flex
                borderStyle='solid-1'
                radius='s'>
                <Text
                    as='p'
                    variant='body-default-l'
                    padding='32'>
                    Digital Audio Workstations, commonly referred to as DAWs, are electronic devices or application software used for recording, editing and producing audio files.
                    DAWs come in a wide variety of configurations from a single software program on a laptop, to an integrated stand-alone unit, all the way to a highly
                    complex configuration of numerous components controlled by a central computer. Regardless of configuration, modern DAWs have a central interface that
                    allows the user to alter and mix multiple recordings and tracks into a final produced piece<SmartLink
                        href="/learning/citation#1"
                    >[1]</SmartLink>. There applications include music, speech, radio, television
                    and film, soundtracks, podcasts, and basically any field that has audio involved. For the purposes of this project, we will be referring
                    to DAWs as the software applications that are used to create and edit music.
                </Text>
            </Flex>

            <Flex
                as='div'
                marginTop='48'
                direction='column'
            >
                <Text
                    as='h2'
                    variant='heading-strong-l'
                    marginLeft='16'
                    align='center'>
                    Popular DAWs
                </Text>
                <Text
                    variant='body-default-l'
                    padding='16'>
                    Below are screenshots of some of the most popular DAWsvused today.
                    Despite some slight variations in the designs, one can see that they share similar functionalities.
                    In addition, these screenshots highlight their heavy reliance on graphical interfaces, which as you can already imagine,
                    pose significant challenges for individuals with visual impairments:
                </Text>
                <Grid
                    borderStyle="solid-1"
                    radius='s'
                    columns="repeat(3, 1fr)"
                    gap="24"
                    padding="24"
                    height='l'
                    fillWidth
                >
                    <Flex direction='column'>
                        <SmartImage
                            src='/images/ableton.webp'
                            alt='ableton screenshot'
                            radius='xs'
                            sizes='s' />
                        <Text align='right'>Ableton Live</Text>
                    </Flex>

                    <Flex direction='column'>
                        <SmartImage
                            src='/images/fl-studio.jpg'
                            alt='fl studio screenshot'
                            radius='xs'
                            sizes='s' />
                        <Text align='right'>FL Studio</Text>
                    </Flex>

                    <Flex direction='column'>
                        <SmartImage
                            src='/images/logic-pro.jpg'
                            alt='logic pro screenshot'
                            radius='xs'
                            sizes='s' />
                        <Text align='right'>Logic Pro</Text>
                    </Flex>

                    <Flex direction='column'>
                        <SmartImage
                            src='/images/garageband.jpg'
                            alt='garageband screenshot'
                            radius='xs'
                            sizes='s' />
                        <Text align='right'>Garageband</Text>
                    </Flex>

                    <Flex direction='column'>
                        <SmartImage
                            src='/images/pro-tools.png'
                            alt='pro-tools screenshot'
                            radius='xs'
                            sizes='s' />
                        <Text align='right'>Pro Tools</Text>
                    </Flex>

                    <Flex direction='column'>
                        <SmartImage
                            src='/images/reaper.webp'
                            alt='reaper screenshot'
                            radius='xs'
                            sizes='s' />
                        <Text align='right'>REAPER</Text>
                    </Flex>
                </Grid>

            </Flex>

                    <Flex
                      margin='16'
                      padding='16'
                      justifyContent='right'
                      fillWidth
                    >
                      <Button
                        id="next"
                        href='/learning/simple-preview'
                        variant="primary">
                        <Flex alignItems="center">
                        Next: Simple Preview
                          <Arrow trigger="#next" color='onSolid' />
                        </Flex>
                      </Button>
            
                    </Flex>

        </Flex>
    );
}
