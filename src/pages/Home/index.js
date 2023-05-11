import { useContext } from 'react';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ModalMenuMobile from '../../components/ModalMenuMobile';
import Presentation from '../../components/Presentation';
import Projects from '../../components/Projects';
import ScrollUp from '../../components/ScrollUp';
import Skills from '../../components/Skills';
import { GlobalContext } from '../../contexts/GlobalContext';

function Home() {
  const { openMenu } = useContext(GlobalContext);

  return (
    <div className='container'>
      <Header />
      <main id='main'>
        <Presentation />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ScrollUp />
      </main>
      <Footer />
      {
        openMenu &&
        <ModalMenuMobile />
      }
    </div>
  );
}

export default Home;
