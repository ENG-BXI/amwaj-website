'use client';
import Image from 'next/image';
import OurCommitmentImage from '@/public/Images/OurCommitment.png';
import {useGSAP} from '@gsap/react';
import gsap, {ScrollTrigger} from 'gsap/all';
import {useRef} from 'react';
const OurCommitment = () => {
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
    <section ref={container} id='ourCommitment' className='section'>
      <h2 className='section__title text-[80px]! lg:text-[120px]! mb-20! overflow-hidden!'>التزامنا Our Commitment</h2>
      <div className='w-full min-h-100 bg-linear-to-l from-[#091616] vie-[#0F1F1F] to-[#204C4C]/50  flex flex-col gap-5 lg:flex-row justify-around items-center py-7 px-5 lg:px-10 rounded-xl '>
        <div className='h-full w-full lg:w-1/2 overflow-hidden rounded-xl order-2 lg:order-1 '>
          <Image className='w-full h-full object-cover' src={OurCommitmentImage} alt='OurCommitment Image' />
        </div>
        <div className='lg:w-1/2 order-1 lg:order-2'>
          <h3 className='text-3xl text-center lg:text-start text-secondary font-bold mb-5 lg:mb-15'>التزامنا… أساس نجاح مشاريعكم</h3>
          <p className='text-center lg:text-start'>نلتزم في شركة أمواج الدولية للتجارة والمقاولات المحدودة بتقديم حلول هندسية متكاملة تلبي احتياجات عملائنا بدقة وكفاءة.نسعى لأن نكون الخيار الأول في تنفيذ مشاريع الطاقة والبنية التحتية وأن نواصل الإسهام في بناء مستقبل يعتمد على الطاقة الآمنة والمستدامة</p>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
