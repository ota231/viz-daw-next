import { Flex, Text } from '@/once-ui/components';

export default function Bye() {
    return (
        <Flex
            direction='column'
            margin='8'
            padding='8'>
            <Flex>
                <Text
                    as='h1'>
                    Bibliography
                </Text>

            </Flex>

            <Flex
                as='ol'
                direction='column'>
                <Text
                    id='1'
                    as='li'
                    variant='body-default-l'>
                    Wikipedia contributors. “Digital Audio Workstation.” Wikipedia, 4 Nov. 2024, en.wikipedia.org/wiki/Digital_audio_workstation.
                </Text>
                <Text
                    id='2'
                    as='li'
                    variant='body-default-l'>
                    Saha, Abir, and Anne Marie Piper. “Understanding audio production practices of people with vision impairments.” Proceedings of the 22nd International ACM SIGACCESS Conference on Computers and Accessibility, 26 Oct. 2020, https://doi.org/10.1145/3373625.3416993.
                </Text>
                <Text id='3'
                    as='li'
                    variant='body-default-l'>
                    NV Access, NV Access Limited., www.nvaccess.org/. Accessed Dec. 2024.
                </Text>
                <Text id='4'
                    as='li'
                    variant='body-default-l'>
                    Karpodini, Christina. “Evaluating haptic technology in accessibility of digital audio workstations for visual impaired creatives.” Proceedings of the 24th International ACM SIGACCESS Conference on Computers and Accessibility, 22 Oct. 2022, pp. 1–5, https://doi.org/10.1145/3517428.3550414.
                </Text>
                <Text id='5'
                    as='li'
                    variant='body-default-l'>
                Metatla, Oussama, et al. “Audio-haptic interfaces for digital audio workstations.” Journal on Multimodal User Interfaces, vol. 10, no. 3, 2 May 2016, pp. 247–258, https://doi.org/10.1007/s12193-016-0217-8. 
                </Text>
            </Flex>
        </Flex>
    );
}