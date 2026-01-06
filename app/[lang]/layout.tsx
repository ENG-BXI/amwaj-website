import './globals.css';
import localFont from 'next/font/local';
import Logo from '@/public/Images/Logo.png';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../i18n/routing';
import LoadingScreen from './_Components/LoadingScreen';

const cairo = localFont({
  src: './../../public/Fonts/Cairo-VariableFont_slnt,wght.ttf'
});
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  const t = await getTranslations({locale: lang, namespace: 'Metadata'});

  const baseUrl = 'https://amwaj-ye.com'; // Replace with real domain if available

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    icons: Logo.src,
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        ar: `${baseUrl}/ar`,
        en: `${baseUrl}/en`
      }
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${lang}`,
      siteName: 'Amwaj International',
      locale: lang === 'ar' ? 'ar_YE' : 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description')
    }
  };
}

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
  // TODO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: lang === 'ar' ? 'شركة أمواج الدولية للتجارة والمقاولات المحدودة' : 'Amwaj International Trading & Contracting Co. Ltd.',
    url: 'https://amwaj-ye.com',
    logo: `https://amwaj-ye.com${Logo.src}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: lang === 'ar' ? 'المكلا' : 'Mukalla',
      addressRegion: lang === 'ar' ? 'حضرموت' : 'Hadramout',
      addressCountry: 'YE'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+9675362936',
      contactType: 'customer service'
    }
  };

  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} className='scroll-smooth'>
      <head>
        <script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      </head>
      <body className={`${cairo.className} antialiased`}>
        <LoadingScreen />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
