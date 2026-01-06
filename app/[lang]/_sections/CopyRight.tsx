import {Link} from '@/app/i18n/navigation';
import {useTranslations} from 'next-intl';
import React from 'react';

const CopyRight = () => {
  const t = useTranslations('CopyRight');
  return (
    <div className='container mx-auto px-4 py-4 border-t border-white/10'>
      <div className='flex flex-col justify-between items-center'>
        <div className='text-white/60 text-sm md:text-base font-light'>{t('text')}</div>
        <div className='text-sm md:text-base'>
          <span className='text-white/40 font-light'>{t('developedBy')} </span>
          <Link target='_blank' href={'https://abdulrhman-portfolio-code.vercel.app/'}>
            <span className='text-primary font-bold hover:text-white transition-colors cursor-pointer'>Abdulrhman Muneer Aljaeeidi</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
