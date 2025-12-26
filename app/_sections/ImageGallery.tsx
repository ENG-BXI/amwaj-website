import Image from 'next/image';
import OurTeamImage from '@/public/Images/OurTeam.png';

const ImageGallery = () => {
  const listOfImage = [OurTeamImage, OurTeamImage, OurTeamImage, OurTeamImage, OurTeamImage, OurTeamImage, OurTeamImage, OurTeamImage];
  return (
    <section className='section'>
      <h2 className='section__title text-[120px]! text-base/30! mb-20!'>
        معرض الصور <br />
        IMAGE GALLARY
      </h2>
      <div className='grid justify-items-center grid-cols-4 gap-10 px-10'>
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
