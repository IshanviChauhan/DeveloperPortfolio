import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ConditionalHeader } from '@/components/conditional-header';

export const metadata: Metadata = {
  title: 'Portfolio - Ishanvi Chauhan',
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
        <link rel="preconnect" href="https://gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.19/build/spline-viewer.js" async></script>
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ConditionalHeader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
