import NavBar from './_Components/NavBar';
import ScrollLenis from './_Components/ScrollLenis';
import ContactUs from './_sections/ContactUs';
import CopyRight from './_sections/CopyRight';
import Footer from './_sections/Footer';
import FooterCompanyName from './_sections/FooterCompanyName';
import Hero from './_sections/Hero';
import ImageGallery from './_sections/ImageGallery';
import OurClients from './_sections/OurClients';
import OurCommitment from './_sections/OurCommitment';
import OurExperience from './_sections/OurExperience';
import OurLocation from './_sections/OurLocation';
import OurPartners from './_sections/OurPartners';
import OurPhilosophy from './_sections/OurPhilosophy';
import OurProject from './_sections/OurProject';
import OurTeam from './_sections/OurTeam';
import OurWork from './_sections/OurWork';
import WhoAreWe from './_sections/WhoAreWe';

const page = () => {
  return (
    <main className='bg-background relative 2xl:container 2xl:mx-auto scroll-smooth '>
      <ScrollLenis>
        <NavBar />
        <Hero />
        <WhoAreWe />
        <OurPhilosophy />
        <OurWork />
        <OurExperience />
        <OurTeam />
        <OurCommitment />
        <OurPartners />
        <OurClients />
        <OurProject />
        <ImageGallery />
        <OurLocation />
        <ContactUs />
        <FooterCompanyName />
        <Footer />
        <CopyRight />
      </ScrollLenis>
    </main>
  );
};

export default page;
