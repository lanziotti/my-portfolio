import { useContext } from 'react';
import GithubIcon from '../../assets/github.png';
import LinkedinIcon from '../../assets/linkedin.png';
import MyImage from '../../assets/rodrigo-image.jpeg';
import WhatsappIcon from '../../assets/whatsapp.png';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ModalMenuMobile from '../../components/ModalMenuMobile';
import { GlobalContext } from '../../contexts/GlobalContext';
import './styles.css';

function Home() {
  const { openMenu } = useContext(GlobalContext);

  return (
    <div className='container'>
      <Header />
      <main>
        <section className='presentation'>
          <div className='container-presentation'>
            <h2>Olá, bem vindo(a)! Sou o</h2>
            <h1 className='typing-animation'>Rodrigo Lanziotti</h1>
            <h3>Desenvolvedor Full-Stack</h3>
          </div>
          <div className='presentation-icons'>
            <img src={WhatsappIcon} alt='WhatsApp' />
            <img src={GithubIcon} alt='GitHub' />
            <img src={LinkedinIcon} alt='LinkedIn' />
          </div>
          <div className='my-image'>
            <img src={MyImage} alt='Rodrigo Lanziotti' />
          </div>
        </section>
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
