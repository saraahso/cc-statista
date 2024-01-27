import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import ThemeProvider from './theme-provider';
import './globals.css';
import { ReactQueryProvider } from './react-query-provider';
import Footer from '@/components/Footer';

const open_sans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title:
    'Statista - The Statistics Portal for Market Data, Market Research and Market Studies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full min-h-screen ${open_sans.className}`}>
        <ReactQueryProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
