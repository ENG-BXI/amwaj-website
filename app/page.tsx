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
  // Todo
  /*
  1- multi language
  2- send email to admin by form
  3- add mobile menu item
  4- add real email in footer
  5- add real phone number in footer
  6- add real address in footer
  7- add real location in foote
  8- add real image and real logo
  9- feedback from amwaj admin and share it in linked in or any social media
  */
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
