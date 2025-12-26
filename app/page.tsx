import NavBar from './_Components/NavBar';
import Hero from './_sections/Hero';
import OurExperience from './_sections/OurExperience';
import OurPhilosophy from './_sections/OurPhilosophy';
import OurTeam from './_sections/OurTeam';
import OurWork from './_sections/OurWork';
import WhoAreWe from './_sections/WhoAreWe';
const page = () => {
  return (
    <main className='bg-background relative 2xl:container 2xl:mx-auto '>
      <NavBar />
      <Hero />
      <WhoAreWe />
      <OurPhilosophy />
      <OurWork />
      <OurExperience />
      <OurTeam />
      <div className='h-screen'></div>
    </main>
  );
};

export default page;
