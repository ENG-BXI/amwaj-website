import {Metadata} from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Logo from '@/public/Images/Logo.png';
const cairo = localFont({
  src: './../public/Fonts/Cairo-VariableFont_slnt,wght.ttf'
});
export const metadata: Metadata = {
  title: 'امواج الدولية للتجارة والمقاولات المحدودة',
  icons: Logo.src
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ar' dir='rtl' className='scroll-smooth'>
      <body className={`${cairo.className} antialiased`}>{children}</body>
    </html>
  );
}
