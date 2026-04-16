import './globals.css';

export const metadata = {
  title: 'Spatial Pro Empire',
  description: 'A Next.js Application for Spatial Pro Empire',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}