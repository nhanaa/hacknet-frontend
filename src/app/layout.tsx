import type { Metadata } from 'next';
import './globals.css';
import { ChakraProvider } from '@chakra-ui/react';

export const metadata: Metadata = {
  title: 'HackNet',
  description: 'HackNet - Connect Hackers for a better hackathon experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
