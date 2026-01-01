'use client';
import {useGSAP} from '@gsap/react';
import gsap, {ScrollTrigger} from 'gsap/all';
import {useRef} from 'react';
const OurLocation = () => {
  const container = useRef<HTMLDivElement>(null);
  // animate by scroll
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current!,
          start: '30% 90%',
          end: 'bottom 20%'
        }
      });
      tl.from(container.current!.querySelector('h2'), {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
      });
      // animation for paragraph
      tl.from(
        container.current!.querySelector('p'),
        {
          duration: 1,
          y: 50,
          opacity: 0,
          stagger: 0.1,
          ease: 'power3.out'
        },
        '-=0.5'
      );
    },
    {scope: container}
  );
  return (
    <section ref={container} id='ourLocation' className='section px-5'>
      <h2 className='section__title text-[80px]! md:text-[120px]! overflow-hidden!'>موقعنا OUT LOCATION</h2>
      <p className='text-center text-secondary mb-10'>
        الجمهورية اليمنية - محافظة حضرموت - مدينة المكلا - شارع فوة الرئيسي <br />
        Fowa&apos;a Main street - ALMukalla city - Hadramout - Yemen
      </p>
      {/* // TODO Add Map TO Box */}
      <div className='bg-primary w-full h-120 rounded-2xl p-5 '>
        <div className='w-full h-full rounded-xl! overflow-hidden'>
          <iframe className='w-full h-full border-0!' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.5386257559088!2d49.12713979481285!3d14.533153532356343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3de8e5770870af43%3A0x7ba1989249d847d8!2z2LTYsdmD2Kkg2YXYtdin2K_YsSDZhNmE2K3ZhNmI2YQg2KfZhNin2YTZg9iq2LHZiNmG2YrYqQ!5e0!3m2!1sar!2s!4v1767240240261!5m2!1sar!2s' allowFullScreen loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
