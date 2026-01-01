'use client';
import Image, {StaticImageData} from 'next/image';
import OurWork1 from '@/public/Images/our-works-1.png';
import OurWork2 from '@/public/Images/our-works-2.png';
import OurWork3 from '@/public/Images/our-works-3.png';
import {useGSAP} from '@gsap/react';
import {useRef} from 'react';
import gsap, {ScrollTrigger} from 'gsap/all';
import {SplitText} from 'gsap/all';
const OurWork = () => {
  const listSectionData: IOurWorkData[] = [
    {
      title: 'اعمالنا الكهربائية',
      image: OurWork1,
      listOfData: ['إنشاء وتركيب محطات التحويل الكهربائية (11/33 ك.ف وما فوق) بما في ذلك المحولات والمفاتيح الكهربائية وأنظمة الحماية والتحكم.', 'إنشاء وتركيب محطات التحويل الكهربائية (11/33 ك.ف وما فوق) بما في ذلك المحولات والمفاتيح الكهربائية وأنظمة الحماية والتحكم.', 'أعمال التشغيل والفحص (Testing & Commissioning) لمعدات المحطات الكهربائية.', 'تصميم وتنفيذ أنظمة التحكم والمراقبة (SCADA & PLC Systems)', 'أعمال الإنارة الداخلية والخارجية للمباني والمنشآت الصناعية.']
    },
    {
      title: 'اعمالنا الميكانيكية',
      image: OurWork2,
      listOfData: ['تنفيذ أنظمة التبريد والتهوية والتكييف (HVAC) للمحطات والمباني', 'تنفيذ شبكات المياه والصرف الصناعي', 'توريد وتركيب أنظمة مكافحة الحريق والإطفاء الآلي.', 'توريد وتركيب المولدات والمضخات والمعدات الميكانيكية للمحطات والمباني.']
    },
    {
      image: OurWork3,
      title: 'التجارة العامة',
      listOfData: ['توريد واستيراد المعدات الكهربائية والميكانيكية لمحطات التحويل والمشاريع الصناعية.', 'توريد واستيراد المفاتيح والمحولات والكابلات من الشركات العالمية المعتمدة.', 'توفير قطع الغيار والملحقات الفنية لمشاريع التشغيل والصيانة.']
    }
  ];
  const container = useRef<HTMLDivElement>(null);
  // animate by scroll
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      const works = container.current!.querySelector('.works') as HTMLElement;
      const workswidth = works.scrollWidth;
      const amoutScroll = workswidth - window.innerWidth;

      const headerWord = SplitText.create(container.current!.querySelector('h2'), {type: 'lines'});
      gsap.from(headerWord.lines, {
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

      gsap.to(container.current!.querySelector('.works'), {
        scrollTrigger: {
          trigger: container.current!.querySelector('.works'),
          start: 'top 15%',
          end: `+=${amoutScroll + 200}`,
          scrub: true,
          pin: true
        },
        duration: 2,
        x: amoutScroll + 200,
        ease: 'linear'
      });
    },
    {scope: container}
  );
  return (
    <section ref={container} id='ourWork' className='section overflow-hidden!'>
      <h2 className='section__title mb-20!'>
        اعمالنا <br />
        OUT WORKS
      </h2>
      <div className='works flex gap-x-70 '>
        {listSectionData.map((e, i) => {
          return <OurWorkData key={i} index={i} data={e} />;
        })}
      </div>
    </section>
  );
};

export default OurWork;

interface IOurWorkData {
  title: string;
  image: StaticImageData;
  listOfData: string[];
}

function OurWorkData({data: {image, listOfData, title}, index}: {data: IOurWorkData; index: number}) {
  return (
    <div className='min-w-300 w-full'>
      <h3 className={`text-5xl font-bold mb-10 ${index === 0 ? 'mb-4!' : ''}`}>{title}</h3>
      <div className=''>
        {/* First */}
        <div className='flex justify-between'>
          {/* Data */}
          <ul className='our-values flex flex-col gap-y-2  '>
            {listOfData.map((e, i) => {
              return (
                <li key={i} data-number={`0${i + 1}`} className={`text-[22px] w-screen! md:w-full! text-wrap ${index === 0 ? 'smaller text-[18px]!' : ''}`}>
                  {e}
                </li>
              );
            })}
          </ul>
          {/* Image */}
          <div className='relative flex justify-end h-150 min-w-150'>
            <div className='pe-3 h-110 w-130 overflow-hidden z-10'>
              <Image className='h-full w-full object-cover' src={image} alt={`${title} Image`} />
            </div>
            <div className='absolute bottom-30 left-0 w-145 h-35  bg-primary'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
