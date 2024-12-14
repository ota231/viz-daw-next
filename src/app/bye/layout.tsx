import {Sidebar} from '@/once-ui/modules';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
    return (
      <div className="flex">
        {/* Sidebar Component */}
        <Sidebar />
  
        {/* Main Content */}
        <main className="flex-1 p-4">{children}</main>
      </div>
    );
  }