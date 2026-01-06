'use client';
import {useGSAP} from '@gsap/react';
import gsap, {ScrollTrigger, SplitText} from 'gsap/all';
import {useRef} from 'react';

import {useTranslations} from 'next-intl';

const WhoAreWe = () => {
  const t = useTranslations('WhoAreWe');
  const container = useRef<HTMLDivElement>(null);
  // animate by scroll
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      const headerWord = SplitText.create(container.current!.querySelector('h2'), {type: 'lines'});
      gsap.from(headerWord.lines, {
        scrollTrigger: {
          trigger: container.current!,
          start: 'top 70%',
          end: 'bottom 20%'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
      });
    },
    {scope: container}
  );
  return (
    <section ref={container} id='whoAreWe' className='section'>
      {/* //Todo fix space error */}
      <h2 className='section__title overflow-hidden'>
        من نحن
        <br />
        WHO ARE WE
      </h2>
      <p className='text-center md:w-4/5 mx-auto text-white/70'>{t('description')}</p>
    </section>
  );
};

export default WhoAreWe;
