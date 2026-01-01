'use client';
import Image from 'next/image';
import ExperienceImage from '@/public/Images/Experience.png';
import {useGSAP} from '@gsap/react';
import gsap, {ScrollTrigger} from 'gsap/all';
import {useRef} from 'react';
const OurExperience = () => {
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
  return (
    <section ref={container} id='ourExperience' className='section mb-20'>
      <h2 className='section__title  text-[80px]! text-base/20! lg:text-[150px]! lg:text-base/45! mb-20!'>خبراتنا EXPERIENCE</h2>
      <div className='bg-[#01614B] w-full min-h-120 flex flex-col lg:flex-row justify-between gap-5 items-center p-4 rounded-xl'>
        <div className='lg:w-1/2'>
          <h3 className='text-3xl text-center lg:text-start font-bold mb-5 lg:mb-15'>خبرة راسخة في تنفيذ مشاريع الطاقة والمحطات الكهربائية</h3>
          <p className='text-center lg:text-start'>نفذت الشركة العديد من المشاريع في مجال محطات التحويل الكهربائية ومشاريع الطاقة والتوزيع بالتعاون مع هيئات ومؤسسات حكومية وشركات دولية، حيث تميزت أعمالها بالدقة في التنفيذ الالتزام بالمواعيد، وتطبيق أعلى معايير الجودة والسلامة</p>
        </div>
        <div className='h-full w-full lg:w-1/2 overflow-hidden rounded-xl '>
          <Image className='w-full h-full object-cover' src={ExperienceImage} alt='Experience Image' />
        </div>
      </div>
    </section>
  );
};

export default OurExperience;
