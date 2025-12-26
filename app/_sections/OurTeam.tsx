import React from 'react';
import OurTeamImage from '@/public/Images/OurTeam.png';
import Image from 'next/image';
const OurTeam = () => {
  return (
    <section className='section'>
      <h2 className='section__title text-[120px]! mb-20!'>فريق العمل OUR TEAM</h2>
      <div className='w-full h-100 bg-linear-to-l from-[#091616] vie-[#0F1F1F] to-[#204C4C]/50  flex justify-around items-center py-7 px-10 rounded-xl '>
        <div className='w-1/2'>
          <h3 className='text-3xl text-secondary font-bold mb-15'>فريق هندسي بخبرة متقدمة يضمن تنفيذ مشاريع موثوقة من البداية حتى التسليم</h3>
          <p>يضم فريقنا نخبة من المهندسين المتخصصين في أنظمة الجهد العالي والمتوسط وفنيين مؤهلين بخبرة واسعة في أعمال التركيب والفحص والتشغيل، بإدارة هندسية تمتلك رؤية احترافية تضمن نجاح المشروع من التصميم إلى التسليم النهائي</p>
        </div>
        <div className='h-full  overflow-hidden rounded-xl '>
          <Image className='w-full h-full object-cover' src={OurTeamImage} alt='OurTeam Image' />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
