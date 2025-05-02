// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProviderContext } from '@/context/ThemeContext';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: 'Your App Title',
  description: 'Your app description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderContext>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
