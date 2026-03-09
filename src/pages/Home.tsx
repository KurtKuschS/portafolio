import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Hero from '@sections/Hero';
import About from '@sections/About';
import Skills from '@sections/Skills';
import Philosophy from '@sections/Philosophy';
import Projects from '@sections/Projects';
import Timeline from '@sections/Timeline';
import Contact from '@sections/Contact';

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Philosophy />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
