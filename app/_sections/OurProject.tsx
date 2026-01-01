
'use client';
import {useGSAP} from '@gsap/react';
import gsap, {ScrollTrigger} from 'gsap/all';
import {useRef} from 'react';
const OurProject = () => {
  const IOurProjectData = ['إنشاء وتركيب محطات التحويل الكهربائية (11/33 ك.ف وما فوق) بما في ذلك المحولات والمفاتيح الكهربائية وأنظمة الحماية والتحكم.', 'توريد وتركيب محطات تحويل 11/33 ك.ف', 'توريد وتركيب وصيانة محطات توليد الطاقة الكهربائية', 'توريد وتركيب وصيانة أنظمة التحكم في محطات توليد الطاقة الكهربائية.', 'مشاريع الخطوط الهوائية Over Head Line توريد وتنفيذ.', 'أعمال التوريد الكهربائي', 'أعمال البنية التحتية الكهربائية والميكانيكية'];
  const container = useRef<HTMLDivElement>(null);
  // animate by scroll
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.from(container.current!.querySelector('h2'), {
        scrollTrigger: {
          trigger: container.current!,
          start: '30% 90%',
          end: 'bottom 20%'
        },
        duration: 1.5,
        markers: true,
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
      <p className='text-center px-5 md:px-20 my-10'>تقدم شركة أمواج الدولية للتجارة والمقاولات المحدودة مجموعة واسعة من المشاريع الكهربائية والميكانيكية مع التزام كامل بالجودة والمعايير الدولية</p>
      <ul className='our-values px-5 md:px-40'>
        {IOurProjectData.map((e, i) => {
          return (
            <li key={i} data-number={`0${i + 1}`} className=''>
              {e}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default OurProject;
