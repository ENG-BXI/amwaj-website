'use client';
import Image from 'next/image';
import ExperienceImage from '@/public/Images/Experience.png';
import {useGSAP} from '@gsap/react';
import gsap, {ScrollTrigger} from 'gsap/all';
import {useRef} from 'react';
import {useTranslations} from 'next-intl';

const OurExperience = () => {
  const t = useTranslations('OurExperience');
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
        ease: 'power3.out'
      });
    },
    {scope: container}
  );
  return (
    <section ref={container} id='ourExperience' className='section mb-20'>
      <h2 className='section__title  text-[80px]! text-base/20! lg:text-[150px]! lg:text-base/45! mb-20!'>خبراتنا EXPERIENCE</h2>
      <div className='bg-[#01614B] w-full min-h-120 flex flex-col lg:flex-row justify-between gap-5 items-center p-4 rounded-xl'>
        <div className='lg:w-1/2'>
          <h3 className='text-3xl text-center lg:text-start font-bold mb-5 lg:mb-15'>{t('title')}</h3>
          <p className='text-center lg:text-start'>{t('description')}</p>
        </div>
        <div className='h-full w-full lg:w-1/2 overflow-hidden rounded-xl '>
          <Image className='w-full h-full object-cover' src={ExperienceImage} alt='Experience Image' />
        </div>
      </div>
    </section>
  );
};

export default OurExperience;
