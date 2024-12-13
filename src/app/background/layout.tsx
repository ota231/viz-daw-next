import { Flex, Text, Button, Arrow } from '@/once-ui/components';
import { Sidebar } from '@/once-ui/modules';

export default function RootLayout({ children, title }: { children: React.ReactNode, title: string }) {

  return (
    <Flex direction="row" fillHeight fillWidth>
      <Sidebar />

      <Flex direction="column" fillWidth>
        {/* Page Header */}
        <Flex
          as="header"
          paddingY='16'
          paddingX="24"
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
            Page title
          </Text>

        </Flex>

        {/* Main Content */}
        <Flex
          as="main"
          padding="16"
          overflowY="auto"
        >
          {children}
        </Flex>

        <Flex
          border='neutral-weak'
          borderStyle="solid-2"
          margin='16'
          padding='16'
          justifyContent='right'
        >
          <Button
            id="next"
            href="" // should be dynamic
            variant="primary">
            <Flex alignItems="center">
              Next: next-page
              <Arrow trigger="#next" color='onSolid' />
            </Flex>
          </Button>

        </Flex>

        {/* Page Footer */}
        <Flex
          as="footer"
          paddingY="16"
          paddingX="24"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            as='p'>
            © 2024 Visual Accessibility in DAWs
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}