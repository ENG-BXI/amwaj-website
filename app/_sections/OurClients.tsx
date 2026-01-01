'use client';
import Image from 'next/image';
import React from 'react';
import Logo from '@/public/Images/Logo.png';
import {useGSAP} from '@gsap/react';
import gsap, {ScrollTrigger} from 'gsap/all';
import {useRef} from 'react';
const OurClients = () => {
  const container = useRef<HTMLDivElement>(null);
  // animate by scroll
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.from(container.current!.querySelector('h2'), {
        scrollTrigger: {
          trigger: container.current!,
          start: '30% 90%',
          end: 'bottom 20%',
          markers: true
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
  const listOfLogo = [Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo, Logo];
  return (
    <section ref={container} id='ourClients' className='section'>
      <h2 className='section__title overflow-hidden!'>عملاؤنا Our Clients</h2>
      <div className='flex flex-wrap justify-center items-center gap-5 md:gap-10 my-20! px-5'>
        {listOfLogo.map((e, i) => {
          return <Image key={i} src={e} alt={e.src} />;
        })}
      </div>
      <div className='w-full min-h-70 bg-linear-to-l from-[#091616] vie-[#0F1F1F] to-[#204C4C]/50  flex justify-center items-center py-5 px-5 md:px-30 rounded-xl '>
        <p className='text-center'>نعتز في شركة أمواج الدولية للتجارة والمقاولات المحدودة بأننا أصبحنا الشريك الموثوق لعدد من الجهات المرموقة في القطاعين الحكومي والخاص، وذلك بفضل ما نقدمه من حلول متكاملة، وجودة عالية، والتزام صارم بمعايير السلامة والموثوقية في مختلف مشاريعنا.</p>{' '}
      </div>
    </section>
  );
};

export default OurClients;
