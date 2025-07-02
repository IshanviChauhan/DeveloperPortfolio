import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Meteors } from "@/components/magicui/meteors";

export const metadata: Metadata = {
  title: 'DevCard - Ishanvi Chauhan',
  description: 'A personal portfolio for Ishanvi Chauhan, a B.Tech in Computer Science Engineering student.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning style={{scrollBehavior:'smooth'}}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <div className="relative overflow-hidden w-full">
          <Meteors number={30} />
          <div className="relative z-10">
            <Header />
            {children}
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
}
