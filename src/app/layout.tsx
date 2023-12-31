import './globals.css';
import type { Metadata } from 'next';
import { NextAuthProvider } from './providers';
import { ChakraProviders } from './chakraProvider';
import QueryProvider from '@/lib/queryProvider';

export const metadata: Metadata = {
  title: 'Next@latest workbench',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ChakraProviders>
            <NextAuthProvider>{children}</NextAuthProvider>
          </ChakraProviders>
        </QueryProvider>
      </body>
    </html>
  );
}
