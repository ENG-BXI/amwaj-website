'use client';
import Image from 'next/image';
import heroImage from '@/public/Images/HeroImage.png';
import {useGSAP} from '@gsap/react';
import {useRef} from 'react';
import gsap, {ScrollTrigger} from 'gsap/all';

const OurPhilosophy = () => {
  const container = useRef<HTMLDivElement>(null);
  // animate by scroll
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.from(container.current!.querySelector('#view h3'), {
        scrollTrigger: {
          trigger: container.current!.querySelector('#view'),
          start: 'top 60%',
          end: 'bottom 20%',
          markers: true
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
          end: 'bottom 20%',
          markers: true
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
  return (
    <section ref={container} id='ourPhilosophy' className='section flex flex-col gap-y-20 md:w-3/4!'>
      {/* رؤيتنا */}
      <div id='view' className='flex flex-col md:flex-row gap-x-10'>
        <div className='w-full md:max-w-120 h-90 overflow-hidden rounded-4xl'>
          <Image className='h-full w-full object-cover' src={heroImage} alt='Our View Image' />
        </div>
        <div className='flex-1 flex flex-col '>
          <h3 className='section__title text-[80px]! text-base/25! md:text-[150px]! md:text-base/50! md:text-start! overflow-hidden'>رؤيتنا</h3>
          <p className='text-[18px] text-center md:text-start'>أن نكون من الشركات الرائدة في تقديم الحلول الهندسية المتكاملة في مجالات الطاقة والمشاريع الكهربائية، والمساهمة في تطوير البنية التحتية الحديثة بكفاءة واستدامة</p>
        </div>
      </div>
      {/* رسالتنا */}
      <div id='message' className='flex flex-col md:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col order-2 md:order-1'>
          <h3 className='section__title text-[80px]! text-base/25! md:text-[130px]! md:text-base/50! md:text-start! overflow-hidden'>رسالتنا</h3>
          <p className='text-[18px] text-center md:text-start'>تقديم خدمات هندسية وفنية عالية الجودة في مجالات المحطات الكهربائية، عبر فريق متخصص يلتزم بأعلى معايير الجودة والسلامة والابتكار لتحقيق رضا العملاء والشركاء.</p>
        </div>
        <div className='w-full md:max-w-120 h-90 overflow-hidden rounded-4xl order-1 md:order-2'>
          <Image className='h-full w-full object-cover' src={heroImage} alt='Our View Image' />
        </div>
      </div>
      {/* قيمنا */}
      <div id='values' className='flex flex-col md:flex-row gap-x-10'>
        <div className='w-full md:max-w-120 h-90 overflow-hidden rounded-4xl'>
          <Image className='h-full w-full object-cover' src={heroImage} alt='Our View Image' />
        </div>
        <div className='flex-1 flex flex-col'>
          <h3 className='section__title text-[80px]! text-base/25! md:text-[150px]! md:text-base/50! md:text-start! overflow-hidden'>قيمنا</h3>
          <ul className='our-values'>
            <li data-number='01' className='font-bold'>
              الجودة والتميز
            </li>
            <li data-number='02' className='font-bold'>
              الالتزام والمصداقية
            </li>
            <li data-number='03' className='font-bold'>
              السلامة أولاً
            </li>
            <li data-number='04' className='font-bold'>
              المستمر
            </li>
            <li data-number='05' className='font-bold'>
              الشراكة طويلة الأمد
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
