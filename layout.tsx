import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Spatial Pro Empire',
  description: 'Autonomous Spatial Productivity Portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}