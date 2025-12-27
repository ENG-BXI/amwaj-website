import OurTeamImage from '@/public/Images/OurTeam.png';
import Image from 'next/image';
const OurTeam = () => {
  return (
    <section id='ourTeam' className='section mb-30'>
      <h2 className='section__title text-[80px]! lg:text-[120px]! mb-20!'>فريق العمل OUR TEAM</h2>
      <div className='w-full min-h-100 bg-linear-to-l from-[#091616] vie-[#0F1F1F] to-[#204C4C]/50  flex flex-col gap-5 lg:flex-row justify-around items-center py-7 px-5 lg:px-10 rounded-xl '>
        <div className='lg:w-1/2'>
          <h3 className='text-3xl text-center lg:text-start text-secondary font-bold mb-5 lg:mb-15'>فريق هندسي بخبرة متقدمة يضمن تنفيذ مشاريع موثوقة من البداية حتى التسليم</h3>
          <p className='text-center lg:text-start'>يضم فريقنا نخبة من المهندسين المتخصصين في أنظمة الجهد العالي والمتوسط وفنيين مؤهلين بخبرة واسعة في أعمال التركيب والفحص والتشغيل، بإدارة هندسية تمتلك رؤية احترافية تضمن نجاح المشروع من التصميم إلى التسليم النهائي</p>
        </div>
        <div className='h-full w-full lg:w-1/2 overflow-hidden rounded-xl '>
          <Image className='w-full h-full object-cover' src={OurTeamImage} alt='OurTeam Image' />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
