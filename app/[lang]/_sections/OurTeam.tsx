'use client';
import OurTeamImage from '@/public/Images/OurTeam.png';
import Image from 'next/image';
import {useGSAP} from '@gsap/react';
import gsap, {ScrollTrigger} from 'gsap/all';
import {useRef} from 'react';
import {useTranslations} from 'next-intl';

const OurTeam = () => {
  const t = useTranslations('OurTeam');
  const container = useRef<HTMLDivElement>(null);
  // animate by scroll
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.from(container.current!.querySelector('h2'), {
        scrollTrigger: {
          trigger: container.current!,
          start: 'top 70%',
          end: 'bottom 20%'
        },
        duration: 1.5,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'all'
      });
    },
    {scope: container}
  );
  return (
    <section ref={container} id='ourTeam' className='section mb-30'>
      <h2 className='section__title text-[80px]! lg:text-[120px]! mb-20! overflow-hidden!'>فريق العمل OUR TEAM</h2>
      <div className='w-full min-h-100 bg-linear-to-l from-[#091616] vie-[#0F1F1F] to-[#204C4C]/50  flex flex-col gap-5 lg:flex-row justify-around items-center py-7 px-5 lg:px-10 rounded-xl '>
        <div className='lg:w-1/2'>
          <h3 className='text-3xl text-center lg:text-start text-secondary font-bold mb-5 lg:mb-15'>{t('title')}</h3>
          <p className='text-center lg:text-start'>{t('description')}</p>
        </div>
        <div className='h-full w-full lg:w-1/2 overflow-hidden rounded-xl '>
          <Image className='w-full h-full object-cover' src={OurTeamImage} alt='OurTeam Image' />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
