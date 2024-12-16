"use client";

import React from 'react';

import { Heading, Text, Flex, Button, GlitchFx, LetterFx, Arrow } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							flex={2} paddingTop="12">
							<Heading variant="display-strong-s"> <GlitchFx interval={5000}>TunedIn</GlitchFx></Heading>
						</Flex>
						<Flex
							position="relative"
							flex={6} gap="24" marginBottom="104"
							direction="column">
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									<LetterFx
										trigger="instant">
										To help you learn about the DAW experience for visually impaired users.
									</LetterFx>
								</span>
							</Heading>
							<Button
								id="readDocs"
								href="/learning/what-is-daw"
								variant="secondary">
								<Flex alignItems="center">
									Let's Learn!
									<Arrow trigger="#readDocs" />
								</Flex>
							</Button>
						</Flex>
					</Flex>
					<Flex position="relative">
						<Text >
							Final Project for Musical Abilities & Disabilities by: Tomisin Adeyemi
						</Text>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Once UI, <Link href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">MIT License</Link>
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://github.com/ota231/viz-daw-next"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
