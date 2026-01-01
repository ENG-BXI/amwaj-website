'use client';
import heroImage from '@/public/Images/HeroImage.png';
import {useGSAP} from '@gsap/react';
import gsap, {SplitText} from 'gsap/all';
import Image from 'next/image';
import {useRef} from 'react';

const Hero = () => {
  gsap.registerPlugin(useGSAP);

  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        const headerWord = SplitText.create(container.current!.querySelector('h1'), {type: 'lines'});
        gsap.from(headerWord.lines, {duration: 0.6, y: 20, opacity: 0, stagger: {each: 0.1, ease: 'power4.out'}, delay: 1.2});
      });
    },
    {scope: container}
  );
  return (
    <section ref={container} id='hero' className='w-full h-full max-2xl:h-screen 2xl:aspect-video overflow-hidden relative'>
      {/* Hero Image */}
      <div className='h-full w-full top-0 left-0 absolute'>
        <Image src={heroImage} alt='heroImage' width={1000} height={1000} className='object-cover w-full h-full' />
      </div>
      <div className='flex w-full h-full items-center justify-center relative'>
        <h1 className='text-white overflow-hidden z-10 -translate-y-10 text-center text-5xl md:text-7xl font-bold'>
          امواج الدولية
          <br /> للتجارة والمقاولات المحدودة
        </h1>
        {/* Background Blur */}
        <div className='absolute bg-primary/50 rounded-full blur-2xl h-60 w-full -translate-[50%] top-[50%] left-[50%]  '></div>
      </div>
    </section>
  );
};

export default Hero;
