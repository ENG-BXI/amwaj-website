'use client';
import Image from 'next/image';
import heroImage from '@/public/Images/HeroImage.png';
import {useGSAP} from '@gsap/react';
import {useRef} from 'react';
import gsap, {ScrollTrigger} from 'gsap/all';

import {useTranslations, useLocale} from 'next-intl';

const OurPhilosophy = () => {
  const t = useTranslations('OurPhilosophy');
  const locale = useLocale();
  const isAr = locale === 'ar';

  const container = useRef<HTMLDivElement>(null);
  // animate by scroll
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.from(container.current!.querySelector('#view h3'), {
        scrollTrigger: {
          trigger: container.current!.querySelector('#view'),
          start: 'top 60%',
          end: 'bottom 20%'
        },
        duration: 1.5,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
      });
      gsap.from(container.current!.querySelector('#message h3'), {
        scrollTrigger: {
          trigger: container.current!.querySelector('#message'),
          start: 'top 60%',
          end: 'bottom 20%'
        },
        duration: 1.5,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
      });
      gsap.from(container.current!.querySelector('#values h3'), {
        scrollTrigger: {
          trigger: container.current!.querySelector('#values'),
          start: 'top 60%',
          end: 'bottom 20%'
        },
        duration: 1.5,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
      });
    },
    {scope: container}
  );
  return (
    <section ref={container} id='ourPhilosophy' className='section flex flex-col gap-y-20 md:w-3/4!'>
      {/* رؤيتنا */}
      <div id='view' className={`flex flex-col ${isAr ? 'md:flex-row' : 'lg:flex-row'} gap-x-10`}>
        <div className={`w-full ${isAr ? 'md:max-w-120' : 'lg:max-w-120'} h-90 overflow-hidden rounded-4xl`}>
          <Image className='h-full w-full object-cover' src={heroImage} alt='Our View Image' />
        </div>
        <div className='flex-1 flex flex-col '>
          <h3 className={`section__title text-base/25! overflow-hidden ${isAr ? 'text-[80px]! md:text-[150px]! md:text-base/50! md:text-start!' : 'text-[80px]! lg:text-[100px]! lg:text-base/50! lg:text-start! text-nowrap'}`}>{t('vision')}</h3>
          <p className={`text-[18px] text-center ${isAr ? 'md:text-start' : 'lg:text-start'}`}>{t('visionDescription')}</p>
        </div>
      </div>
      {/* رسالتنا */}
      <div id='message' className={`flex flex-col ${isAr ? 'md:flex-row' : 'lg:flex-row'} gap-x-10`}>
        <div className={`flex-1 flex flex-col order-2 ${isAr ? 'md:order-1' : 'lg:order-1'}`}>
          <h3 className={`section__title text-base/25! overflow-hidden ${isAr ? 'text-[80px]! md:text-[130px]! md:text-base/50! md:text-start!' : 'text-[80px]! lg:text-[90px]! lg:text-base/50! lg:text-start! text-nowrap'}`}>{t('mission')}</h3>
          <p className={`text-[18px] text-center ${isAr ? 'md:text-start' : 'lg:text-start'}`}>{t('missionDescription')}</p>
        </div>
        <div className={`w-full ${isAr ? 'md:max-w-120' : 'lg:max-w-120'} h-90 overflow-hidden rounded-4xl order-1 ${isAr ? 'md:order-2' : 'lg:order-2'}`}>
          <Image className='h-full w-full object-cover' src={heroImage} alt='Our View Image' />
        </div>
      </div>
      {/* قيمنا */}
      <div id='values' className={`flex flex-col ${isAr ? 'md:flex-row' : 'lg:flex-row'} gap-x-10`}>
        <div className={`w-full ${isAr ? 'md:max-w-120' : 'lg:max-w-120'} h-90 overflow-hidden rounded-4xl`}>
          <Image className='h-full w-full object-cover' src={heroImage} alt='Our View Image' />
        </div>
        <div className='flex-1 flex flex-col'>
          <h3 className={`section__title text-base/25! overflow-hidden ${isAr ? 'text-[80px]! md:text-[130px]! md:text-base/50! md:text-start!' : 'text-[80px]! lg:text-[100px]! lg:text-base/50! lg:text-start! text-nowrap'}`}>{t('values')}</h3>
          <ul className='our-values text-start'>
            <li data-number='01' className='font-bold'>
              {t('value1')}
            </li>
            <li data-number='02' className='font-bold'>
              {t('value2')}
            </li>
            <li data-number='03' className='font-bold'>
              {t('value3')}
            </li>
            <li data-number='04' className='font-bold'>
              {t('value4')}
            </li>
            <li data-number='05' className='font-bold'>
              {t('value5')}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
