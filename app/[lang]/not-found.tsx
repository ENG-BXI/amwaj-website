'use client';
import {Link} from '@/app/i18n/navigation';
import {useTranslations} from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className='min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center'>
      <h1 className='text-6xl md:text-9xl font-bold text-primary mb-4'>404</h1>
      <h2 className='text-2xl md:text-4xl font-bold text-white mb-6'>{t('title')}</h2>
      <p className='text-white/60 text-lg md:text-xl mb-10 max-w-md mx-auto'>{t('description')}</p>
      <Link href='/' className='bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/80 transition-all shadow-lg hover:scale-105 active:scale-95'>
        {t('backHome')}
      </Link>
    </div>
  );
}
