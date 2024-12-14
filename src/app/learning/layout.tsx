import { Flex, Text, Button, Arrow } from '@/once-ui/components';
import { Sidebar } from '@/once-ui/modules';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <Flex direction="row" fillHeight fillWidth>
      <Sidebar />

      <Flex direction="column" fillWidth>        

        {/* Main Content */}
        <Flex
          as="main"
          padding="16"
          overflowY="auto"
        >
          {children}
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