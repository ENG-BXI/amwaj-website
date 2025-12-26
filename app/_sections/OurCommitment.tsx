import Image from 'next/image';
import OurCommitmentImage from '@/public/Images/OurCommitment.png';
const OurCommitment = () => {
  return (
    <section className='section'>
      <h2 className='section__title text-[120px]! mb-20!'>التزامنا Our Commitment</h2>
      <div className='w-full h-100 bg-linear-to-l from-[#091616] vie-[#0F1F1F] to-[#204C4C]/50  flex justify-around items-center py-7 px-10 rounded-xl '>
        <div className='h-full  overflow-hidden rounded-xl '>
          <Image className='w-full h-full object-cover' src={OurCommitmentImage} alt='OurCommitment Image' />
        </div>
        <div className='w-1/2'>
          <h3 className='text-3xl text-secondary font-bold mb-15'>التزامنا… أساس نجاح مشاريعكم</h3>
          <p>نلتزم في شركة أمواج الدولية للتجارة والمقاولات المحدودة بتقديم حلول هندسية متكاملة تلبي احتياجات عملائنا بدقة وكفاءة.نسعى لأن نكون الخيار الأول في تنفيذ مشاريع الطاقة والبنية التحتية وأن نواصل الإسهام في بناء مستقبل يعتمد على الطاقة الآمنة والمستدامة</p>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
