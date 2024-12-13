'use client';

import { Flex, Icon, Text, ToggleButton, NavIcon } from "@/once-ui/components";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// to-do: add navicon
// come back to pathname projjects 

const Sidebar: React.FC = ({
}) => {
    const pathname = usePathname() ?? '';

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
            <Flex
                data-theme="dark"
                maxWidth={16} fillWidth fillHeight paddingX="16" paddingY="32" gap="m"
                background="page" border="neutral-weak" borderStyle="solid-1" radius="l"
                justifyContent="flex-start" alignItems="flex-start" direction="column"
                className={isOpen ? 'translate-x-0' : '-translate-x-full'}>
                <NavIcon onClick={toggleSidebar}/>
                <Flex
                    fillHeight fillWidth paddingX="xs" gap="m"
                    direction="column">
                    <Flex
                        fillWidth
                        gap="4"
                        direction="column">
                        <ToggleButton
                            width="fill"
                            align="start"
                            href=".."
                            selected={false}>
                            <Flex
                                padding="4"
                                alignItems="center"
                                gap="12"
                                textVariant="label-default-s">
                                <Icon
                                    name="home"
                                    onBackground="neutral-weak"
                                    size="xs" />
                                Home
                            </Flex>
                        </ToggleButton>
                    </Flex>

                    <Flex
                        fillWidth
                        height="1"
                        background="neutral-strong">
                    </Flex>

                    <Flex
                        fillWidth
                        gap="4"
                        direction="column">
                        <Flex
                            fillWidth
                            justifyContent="space-between" alignItems="center"
                            paddingY="8" paddingX="16">
                            <Text
                                variant="body-default-xs"
                                onBackground="neutral-weak">
                                A little Background
                            </Text>
                            <Icon
                                name="briefcase"
                                onBackground="neutral-weak"
                                size="xs" />
                        </Flex>
                        <ToggleButton
                            width="fill"
                            align="start"
                            href="/background/what-is-daw"
                            selected={pathname === 'users'}>
                            <Flex
                                padding="4" gap="12"
                                alignItems="center"
                                textVariant="label-default-s">
                                <Flex
                                    height="1" width="16"
                                    alpha="neutral-strong">
                                </Flex>
                                What is a DAW
                            </Flex>
                        </ToggleButton>
                        <ToggleButton
                            width="fill"
                            align="start"
                            href="/background/simple-preview"
                            selected={pathname === 'roles'}>
                            <Flex
                                padding="4"
                                alignItems="center"
                                gap="12"
                                textVariant="label-default-s">
                                <Flex
                                    height="1" width="16"
                                    alpha="neutral-strong">
                                </Flex>
                                Simple Preview
                            </Flex>
                        </ToggleButton>
                        <ToggleButton
                            width="fill"
                            align="start"
                            href="/background/add-more-stuff"
                            selected={pathname === 'permissions'}>
                            <Flex
                                padding="4" gap="12"
                                alignItems="center"
                                textVariant="label-default-s">
                                <Flex
                                    height="1" width="16"
                                    alpha="neutral-strong">
                                </Flex>
                                Add some more stuff
                            </Flex>
                        </ToggleButton>
                        <ToggleButton
                            width="fill"
                            align="start"
                            href="/background/screen-reader"
                            selected={pathname === 'permissions'}>
                            <Flex
                                padding="4" gap="12"
                                alignItems="center"
                                textVariant="label-default-s">
                                <Flex
                                    height="1" width="16"
                                    alpha="neutral-strong">
                                </Flex>
                                Add a screen reader ..?
                            </Flex>
                        </ToggleButton>
                    </Flex>

                    <Flex
                        fillWidth height="1"
                        background="neutral-strong">
                    </Flex>

                    <Flex
                        fillWidth fillHeight gap="4"
                        direction="column">
                        <Flex
                            fillWidth
                            justifyContent="space-between" alignItems="center"
                            paddingY="8" paddingX="16">
                            <Text
                                variant="body-default-xs"
                                onBackground="neutral-weak">
                                Some Fixes ?
                            </Text>
                            <Icon
                                name="settings"
                                onBackground="neutral-weak"
                                size="xs" />
                        </Flex>
                        <ToggleButton
                            width="fill"
                            align="start"
                            href="/fixes/screen-reader-improved"
                            selected={pathname === 'overview'}>
                            <Flex
                                padding="4" gap="12"
                                alignItems="center"
                                textVariant="label-default-s">
                                <Flex
                                    height="1" width="16"
                                    alpha="neutral-strong">
                                </Flex>
                                Screen Reader 2.0
                            </Flex>
                        </ToggleButton>
                        <ToggleButton
                            width="fill"
                            align="start"
                            href="/fixes/haptic-feedback"
                            selected={pathname === 'projects'}>
                            <Flex
                                padding="4" gap="12"
                                alignItems="center"
                                textVariant="label-default-s">
                                <Flex
                                    height="1" width="16"
                                    alpha="neutral-strong">
                                </Flex>
                                Haptic Feedback
                            </Flex>
                        </ToggleButton>
                        <ToggleButton
                            width="fill"
                            align="start"
                            href="/fixes/sonification"
                            selected={pathname === 'projects'}>
                            <Flex
                                padding="4" gap="12"
                                alignItems="center"
                                textVariant="label-default-s">
                                <Flex
                                    height="1" width="16"
                                    alpha="neutral-strong">
                                </Flex>
                                Sonification/Audio Cues
                            </Flex>
                        </ToggleButton>
                        <ToggleButton
                            width="fill"
                            align="start"
                            href="/fixes/ai-assistant"
                            selected={pathname === 'projects'}>
                            <Flex
                                padding="4" gap="12"
                                alignItems="center"
                                textVariant="label-default-s">
                                <Flex
                                    height="1" width="16"
                                    alpha="neutral-strong">
                                </Flex>
                                AI Assistant
                            </Flex>
                        </ToggleButton>
                    </Flex>

                    <Flex
                        fillWidth
                        height="1"
                        background="neutral-strong">
                    </Flex>

                    <Flex
                        fillWidth
                        gap="4"
                        direction="column">
                        <Flex
                            fillWidth
                            justifyContent="space-between" alignItems="center"
                            paddingY="8" paddingX="16">
                            <Text
                                variant="body-default-xs"
                                onBackground="neutral-weak">
                                Bye Bye :(
                            </Text>
                            <Icon
                                name="bye"
                                onBackground="neutral-weak"
                                size="xs" />
                        </Flex>
                        <ToggleButton
                            width="fill"
                            align="start"
                            href=""
                            selected={pathname === 'projects'}>
                            <Flex
                                padding="4" gap="12"
                                alignItems="center"
                                textVariant="label-default-s">
                                <Flex
                                    height="1" width="16"
                                    alpha="neutral-strong">
                                </Flex>
                                Sources, Extras
                            </Flex>
                        </ToggleButton>
                    </Flex>

                </Flex>
            </Flex>
    );
};

Sidebar.displayName = 'Sidebar';
export { Sidebar };