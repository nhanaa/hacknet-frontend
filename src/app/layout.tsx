import type { Metadata } from 'next';
import { ChakraProvider } from '@chakra-ui/react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'HackNet',
  description:
    'HackNet - Connect Hackers for a better hackathon experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
