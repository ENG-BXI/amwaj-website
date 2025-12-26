import Image from 'next/image';
import React from 'react';
import Logo from '@/public/Images/Logo.png';

const OurClients = () => {
  return (
    <section className='section'>
      <h2 className='section__title '>عملاؤنا Our Clients</h2>
      <div className='flex flex-wrap justify-center items-center gap-10 my-20!'>
        <Image src={Logo} alt='Logo' />
        <Image src={Logo} alt='Logo' />
        <Image src={Logo} alt='Logo' />
        <Image src={Logo} alt='Logo' />
        <Image src={Logo} alt='Logo' />
        <Image src={Logo} alt='Logo' />
        <Image src={Logo} alt='Logo' />
        <Image src={Logo} alt='Logo' />
        <Image src={Logo} alt='Logo' />
        <Image src={Logo} alt='Logo' />
        <Image src={Logo} alt='Logo' />
        <Image src={Logo} alt='Logo' />
        <Image src={Logo} alt='Logo' />
        <Image src={Logo} alt='Logo' />
        <Image src={Logo} alt='Logo' />
      </div>
      <div className='w-full h-70 bg-linear-to-l from-[#091616] vie-[#0F1F1F] to-[#204C4C]/50  flex justify-center items-center px-30 rounded-xl '>
        <p className='text-center'>نعتز في شركة أمواج الدولية للتجارة والمقاولات المحدودة بأننا أصبحنا الشريك الموثوق لعدد من الجهات المرموقة في القطاعين الحكومي والخاص، وذلك بفضل ما نقدمه من حلول متكاملة، وجودة عالية، والتزام صارم بمعايير السلامة والموثوقية في مختلف مشاريعنا.</p>{' '}
      </div>
    </section>
  );
};

export default OurClients;
