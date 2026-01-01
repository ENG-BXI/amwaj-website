'use client';
import {useGSAP} from '@gsap/react';
import gsap, {ScrollTrigger, SplitText} from 'gsap/all';
import {useRef} from 'react';

const WhoAreWe = () => {
  const container = useRef<HTMLDivElement>(null);
  // animate by scroll
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      const headerWord = SplitText.create(container.current!.querySelector('h2'), {type: 'lines'});
      gsap.from(headerWord.lines, {
        scrollTrigger: {
          trigger: container.current!,
          start: 'center 80%',
          end: 'bottom 20%',
          markers: true
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
      <p className='text-center md:w-4/5 mx-auto text-white/70'>تعد شركة أمواج الدولية للتجارة والمقاولات المحدودة من الشركات الوطنية الرائدة في مجال تنفيذ المشاريع الكهربائية والميكانيكية والتجارة العامة حيث تمتلك خبرة واسعة في تصميم وتنفيذ وصيانة محطات التحويل الكهربائية ذات الجهد العالي والمتوسط والمنخفض.منذ تأسيسها، حرصت الشركة على الالتزام بالتميز والجودة من خلال كوادر هندسية مؤهلة وشراكات مع أبرز المصنعين والاستشاريين العالميين لتقديم حلول متكاملة تلبي متطلبات مشاريع الطاقة والبنية التحتية الحديثة</p>
    </section>
  );
};

export default WhoAreWe;
