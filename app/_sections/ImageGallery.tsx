'use client';
import Image from 'next/image';
import OurTeamImage from '@/public/Images/OurTeam.png';
import {useGSAP} from '@gsap/react';
import gsap, {ScrollTrigger} from 'gsap/all';
import {useRef} from 'react';
const ImageGallery = () => {
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
  const listOfImage = [OurTeamImage, OurTeamImage, OurTeamImage, OurTeamImage, OurTeamImage, OurTeamImage, OurTeamImage, OurTeamImage];
  return (
    <section ref={container} id='imageGallery' className='section'>
      <h2 className='section__title text-[80px]! text-base/20! md:text-[120px]! md:text-base/30! mb-20! overflow-hidden!'>
        معرض الصور <br />
        IMAGE GALLARY
      </h2>
      <div className='grid justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-10'>
        {listOfImage.map((e, i) => {
          return (
            <div key={i} className='h-120 overflow-hidden'>
              <Image className='w-full h-full object-cover hover:scale-110 duration-500' src={e} alt={e.src} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ImageGallery;
