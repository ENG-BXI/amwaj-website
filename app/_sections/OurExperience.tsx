import Image from 'next/image';
import ExperienceImage from '@/public/Images/Experience.png';
const OurExperience = () => {
  return (
    <section className='section mb-20'>
      <h2 className='section__title  text-[150px]! text-base/45! mb-20!'>خبراتنا EXPERIENCE</h2>
      <div className='bg-[#01614B] w-full h-120 flex justify-between items-center p-4 rounded-xl'>
        <div className='w-1/2'>
          <h3 className='text-3xl font-bold mb-15'>خبرة راسخة في تنفيذ مشاريع الطاقة والمحطات الكهربائية</h3>
          <p>نفذت الشركة العديد من المشاريع في مجال محطات التحويل الكهربائية ومشاريع الطاقة والتوزيع بالتعاون مع هيئات ومؤسسات حكومية وشركات دولية، حيث تميزت أعمالها بالدقة في التنفيذ الالتزام بالمواعيد، وتطبيق أعلى معايير الجودة والسلامة</p>
        </div>
        <div className='h-full  overflow-hidden rounded-xl '>
          <Image className='w-full h-full object-cover' src={ExperienceImage} alt='Experience Image' />
        </div>
      </div>
    </section>
  );
};

export default OurExperience;
