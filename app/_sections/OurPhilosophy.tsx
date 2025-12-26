import Image from 'next/image';
import heroImage from '@/public/images/HeroImage.png';

const OurPhilosophy = () => {
  return (
    <section id='philosophy' className='section flex flex-col gap-y-20 w-3/4!'>
      {/* رؤيتنا */}
      <div className='flex gap-x-10'>
        <div className='w-120 h-90 overflow-hidden rounded-4xl'>
          <Image className='h-full w-full object-cover' src={heroImage} alt='Our View Image' />
        </div>
        <div className='flex-1 flex flex-col'>
          <h3 className='text-start! section__title text-[150px]! text-base/50!'>رؤيتنا</h3>
          <p className='text-[18px]'>أن نكون من الشركات الرائدة في تقديم الحلول الهندسية المتكاملة في مجالات الطاقة والمشاريع الكهربائية، والمساهمة في تطوير البنية التحتية الحديثة بكفاءة واستدامة</p>
        </div>
      </div>
      {/* رسالتنا */}
      <div className='flex gap-x-10'>
        <div className='flex-1 flex flex-col'>
          <h3 className='text-start! section__title text-[150px]! text-base/50!'>رسالتنا</h3>
          <p className='text-[18px]'>تقديم خدمات هندسية وفنية عالية الجودة في مجالات المحطات الكهربائية، عبر فريق متخصص يلتزم بأعلى معايير الجودة والسلامة والابتكار لتحقيق رضا العملاء والشركاء.</p>
        </div>
        <div className='w-120 h-90 overflow-hidden rounded-4xl'>
          <Image className='h-full w-full object-cover' src={heroImage} alt='Our View Image' />
        </div>
      </div>
      {/* قيمنا */}
      <div className='flex gap-x-10'>
        <div className='w-120 h-90 overflow-hidden rounded-4xl'>
          <Image className='h-full w-full object-cover' src={heroImage} alt='Our View Image' />
        </div>
        <div className='flex-1 flex flex-col'>
          <h3 className='text-start! section__title text-[150px]! text-base/50!'>قيمنا</h3>
          <ul className='our-values'>
            <li data-number='01' className='font-bold'>
              الجودة والتميز
            </li>
            <li data-number='02' className='font-bold'>
              الالتزام والمصداقية
            </li>
            <li data-number='03' className='font-bold'>
              السلامة أولاً
            </li>
            <li data-number='04' className='font-bold'>
              المستمر
            </li>
            <li data-number='05' className='font-bold'>
              الشراكة طويلة الأمد
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
