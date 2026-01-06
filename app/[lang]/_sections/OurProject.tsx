'use client';
import {useGSAP} from '@gsap/react';
import gsap, {ScrollTrigger} from 'gsap/all';
import {useRef} from 'react';
import {useTranslations} from 'next-intl';

const OurProject = () => {
  const t = useTranslations('OurProject');
  const items = t.raw('items') as string[];
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
    <section ref={container} id='ourProject' className='section'>
      <h2 className='section__title text-[80px]! md:text-[120px]! overflow-hidden!'>مشاريعنا Our Projects</h2>
      <p className='text-center px-5 md:px-20 my-10'>{t('description')}</p>
      <ul className='our-values px-5 md:px-40'>
        {items.map((e, i) => {
          return (
            <li key={i} data-number={i + 1 < 10 ? `0${i + 1}` : `${i + 1}`} className=''>
              {e}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default OurProject;
