import {Metadata} from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Logo from '@/public/Images/Logo.png';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../i18n/routing';
const cairo = localFont({
  src: './../../public/Fonts/Cairo-VariableFont_slnt,wght.ttf'
});
export const metadata: Metadata = {
  title: 'امواج الدولية للتجارة والمقاولات المحدودة',
  icons: Logo.src
};
export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{lang: string}>;
}>) {
  const {lang} = await params;
  if (!hasLocale(routing.locales, lang)) {
    notFound();
  }
  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} className='scroll-smooth'>
      <body className={`${cairo.className} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
