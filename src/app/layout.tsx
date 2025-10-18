import type { Metadata } from 'next';
import { Inter, Bai_Jamjuree } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-main',
});

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Platform',
  icons: ['favicon-32x32.png', 'favicon-16x16.png', 'logoIcon.svg'],
  manifest: 'site.webmanifest',
  description: 'Platform.',
  openGraph: {
    title: 'Platform',
    description: 'Platform.',
    images: ['https://platform.utdnebula.com/logoIcon.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    site: 'platform.utdnebula.com',
  },
};
export const viewport = {
  //copied from globals.css
  themeColor: '#573DFF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-main ${baiJamjuree.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
