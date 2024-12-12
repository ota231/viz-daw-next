import {Sidebar} from '@/once-ui/modules';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    // Sidebar items configuration
    /*const items = [
      { label: 'Introduction', href: '/learning' },
      { label: 'Module 1', href: '/learning/module-1' },
      { label: 'Module 2', href: '/learning/module-2' },
    ];*/
  
    return (
      <div className="flex">
        {/* Sidebar Component */}
        <Sidebar />
  
        {/* Main Content */}
        <main className="flex-1 p-4">{children}</main>
      </div>
    );
  }