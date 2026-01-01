'use client';
import LogoLoop from '@/app/_Components/LogoLoop';
import Logo from '@/public/Images/Logo.png';
import {useGSAP} from '@gsap/react';
import gsap, {ScrollTrigger} from 'gsap/all';
import {useRef} from 'react';

const OurPartners = () => {
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
  const imageLogos = [
    {src: Logo.src, alt: 'Logo', href: 'https://company1.com'},
    {src: Logo.src, alt: 'Logo', href: 'https://company2.com'},
    {src: Logo.src, alt: 'Logo', href: 'https://company2.com'},
    {src: Logo.src, alt: 'Logo', href: 'https://company2.com'},
    {src: Logo.src, alt: 'Logo', href: 'https://company2.com'},
    {src: Logo.src, alt: 'Logo', href: 'https://company3.com'}
  ];
  return (
    <section ref={container} id='ourPartners' className='section mb-20'>
      <h2 className='section__title text-[80px]! text-base/20! md:text-[100px]! md:text-base/30! mb-20! overflow-hidden!'>
        شركاؤنا في التوريد والتعاون
        <br />
        Our Partners in Supply & Collaboration
      </h2>
      {/* Logo Scroll */}
      <div className='relative overflow-hidden mb-20'>
        <LogoLoop logos={imageLogos} speed={80} direction='left' logoHeight={60} gap={40} hoverSpeed={0} scaleOnHover fadeOut fadeOutColor='#091616' ariaLabel='Logo partners 1' />
        <LogoLoop logos={imageLogos} speed={80} direction='right' logoHeight={60} gap={40} hoverSpeed={0} scaleOnHover fadeOut fadeOutColor='#091616' ariaLabel='Logo partners 1' />
        <LogoLoop logos={imageLogos} speed={80} direction='left' logoHeight={60} gap={40} hoverSpeed={0} scaleOnHover fadeOut fadeOutColor='#091616' ariaLabel='Logo partners 1' />
        <LogoLoop logos={imageLogos} speed={80} direction='right' logoHeight={60} gap={40} hoverSpeed={0} scaleOnHover fadeOut fadeOutColor='#091616' ariaLabel='Logo partners 1' />
      </div>
      {/* Text */}
      <div className='w-full min-h-70 bg-linear-to-l from-[#091616] vie-[#0F1F1F] to-[#204C4C]/50  flex justify-center items-center py-5 px-5 md:px-30 rounded-xl '>
        <p className='text-center'>نحرص في شركة أمواج الدولية للتجارة والمقاولات المحدودة على بناء علاقات استراتيجية مع أبرز الشركات العالمية والإقليمية في مجالات الكهرباء الميكانيكا، والتجارة العامة. ويأتي تعاوننا مع هذه الشركات بهدف ضمان جودة عالية في المنتجات والخدمات المقدمة لمشاريعنا. والالتزام بالمعايير الدولية في كل ما نقوم به</p>
      </div>
    </section>
  );
};

export default OurPartners;
