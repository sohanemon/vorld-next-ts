import Navbar from '@/components/navbar';
import './globals.css';
import { Jura } from 'next/font/google';
import localFont from 'next/font/local';

const jura = Jura({ subsets: ['latin'], variable: '--jura' });
const bicubik = localFont({
  src: '../fonts/bicubik.otf',
  variable: '--bicubik',
});

export const metadata = {
  title: 'The Vorld',
  description: 'Vorld + NEXT + TS + Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${bicubik.variable} ${jura.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
