import Image from 'next/image';
import heroImage from '@/public/Images/HeroImage.png';

const OurPhilosophy = () => {
  return (
    <section id='ourPhilosophy' className='section flex flex-col gap-y-20 md:w-3/4!'>
      {/* رؤيتنا */}
      <div className='flex flex-col md:flex-row gap-x-10'>
        <div className='w-full md:max-w-120 h-90 overflow-hidden rounded-4xl'>
          <Image className='h-full w-full object-cover' src={heroImage} alt='Our View Image' />
        </div>
        <div className='flex-1 flex flex-col '>
          <h3 className='section__title text-[80px]! text-base/25! md:text-[150px]! md:text-base/50! md:text-start!'>رؤيتنا</h3>
          <p className='text-[18px] text-center md:text-start'>أن نكون من الشركات الرائدة في تقديم الحلول الهندسية المتكاملة في مجالات الطاقة والمشاريع الكهربائية، والمساهمة في تطوير البنية التحتية الحديثة بكفاءة واستدامة</p>
        </div>
      </div>
      {/* رسالتنا */}
      <div className='flex flex-col md:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col order-2 md:order-1'>
          <h3 className='section__title text-[80px]! text-base/25! md:text-[130px]! md:text-base/50! md:text-start!'>رسالتنا</h3>
          <p className='text-[18px] text-center md:text-start'>تقديم خدمات هندسية وفنية عالية الجودة في مجالات المحطات الكهربائية، عبر فريق متخصص يلتزم بأعلى معايير الجودة والسلامة والابتكار لتحقيق رضا العملاء والشركاء.</p>
        </div>
        <div className='w-full md:max-w-120 h-90 overflow-hidden rounded-4xl order-1 md:order-2'>
          <Image className='h-full w-full object-cover' src={heroImage} alt='Our View Image' />
        </div>
      </div>
      {/* قيمنا */}
      <div className='flex flex-col md:flex-row gap-x-10'>
        <div className='w-full md:max-w-120 h-90 overflow-hidden rounded-4xl'>
          <Image className='h-full w-full object-cover' src={heroImage} alt='Our View Image' />
        </div>
        <div className='flex-1 flex flex-col'>
          <h3 className='section__title text-[80px]! text-base/25! md:text-[150px]! md:text-base/50! md:text-start!'>قيمنا</h3>
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
