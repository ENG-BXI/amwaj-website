import heroImage from '@/public/images/HeroImage.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id='hero' className='w-full h-full max-2xl:h-screen 2xl:aspect-video overflow-hidden relative'>
      {/* Hero Image */}
      <div className='h-full w-full top-0 left-0 absolute'>
        <Image src={heroImage} alt='heroImage' width={1000} height={1000} className='object-cover w-full h-full' />
      </div>
      <div className='flex w-full h-full items-center justify-center relative'>
        <h1 className='text-white z-10 -translate-y-10 text-center text-7xl font-bold'>
          امواج الدولية
          <br /> للتجارة والمقاولات المحدودة
        </h1>
        {/* Background Blur */}
        <div className='absolute bg-primary/50 rounded-full blur-2xl h-60 w-full -translate-[50%] top-[50%] left-[50%]  '></div>
      </div>
    </section>
  );
};

export default Hero;
