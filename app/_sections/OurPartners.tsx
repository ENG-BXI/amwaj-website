import LogoLoop from '@/app/_Components/LogoLoop';
import Logo from '@/public/Images/Logo.png';
const OurPartners = () => {
  const imageLogos = [
    {src: Logo.src, alt: 'Logo', href: 'https://company1.com'},
    {src: Logo.src, alt: 'Logo', href: 'https://company2.com'},
    {src: Logo.src, alt: 'Logo', href: 'https://company2.com'},
    {src: Logo.src, alt: 'Logo', href: 'https://company2.com'},
    {src: Logo.src, alt: 'Logo', href: 'https://company2.com'},
    {src: Logo.src, alt: 'Logo', href: 'https://company3.com'}
  ];
  return (
    <section className='section mb-20'>
      <h2 className='section__title text-[100px]! text-base/30! mb-20!'>
        شركاؤنا في التوريد والتعاون
        <br />
        Our Partners in Supply & Collaboration
      </h2>
      {/* Logo Scroll */}
      <div className='relative overflow-hidden mb-20'>
        <LogoLoop logos={imageLogos} speed={80} direction='left' logoHeight={60} gap={40} hoverSpeed={0} scaleOnHover fadeOut fadeOutColor='#091616' ariaLabel='Logo partners 1' />
        <LogoLoop logos={imageLogos} speed={80} direction='right' logoHeight={60} gap={40} hoverSpeed={0} scaleOnHover fadeOut fadeOutColor='#091616' ariaLabel='Logo partners 1' />
        <LogoLoop logos={imageLogos} speed={80} direction='left' logoHeight={60} gap={40} hoverSpeed={0} scaleOnHover fadeOut fadeOutColor='#091616' ariaLabel='Logo partners 1' />
      </div>
      {/* Text */}
      <div className='w-full h-70 bg-linear-to-l from-[#091616] vie-[#0F1F1F] to-[#204C4C]/50  flex justify-center items-center px-30 rounded-xl '>
        <p className='text-center'>نحرص في شركة أمواج الدولية للتجارة والمقاولات المحدودة على بناء علاقات استراتيجية مع أبرز الشركات العالمية والإقليمية في مجالات الكهرباء الميكانيكا، والتجارة العامة. ويأتي تعاوننا مع هذه الشركات بهدف ضمان جودة عالية في المنتجات والخدمات المقدمة لمشاريعنا. والالتزام بالمعايير الدولية في كل ما نقوم به</p>
      </div>
    </section>
  );
};

export default OurPartners;
