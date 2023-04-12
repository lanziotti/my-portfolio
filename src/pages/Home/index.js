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
        <section className='about-me'>
          <div className='patch-title'>
            <h1>Sobre mim</h1>
          </div>
          <h3>Meu nome é Rodrigo Lanziotti, tenho 35 anos, moro em Juiz de Fora/MG, sou Desenvolvedor Full-Stack e apaixonado por tecnologia.</h3>
          <p>Engenheiro Civil de formação, já empreendi no ramo alimentício durante 6 anos, onde pude adquirir uma enorme experiência em gestão de negócios, financeira, de tempo e, principalmente, de pessoas, tendo de sempre estar, como líder, exercendo uma comunicação acertiva e não violenta com toda equipe, além de manter tudo sempre organizado e produtivo visando sempre o melhor possível para o cliente.</p>
          <p>Em abril de 2022 comecei a me dedicar integralmente a minha paixão ingressando no Curso de Desenvolvimento de Software da Cubos Academy, no qual conclui em dezembro do mesmo ano e que desde o início venho colocando em prática todo o conhecimento adquirido em projetos práticos, seja no Back-End, Front-End ou Full-Stack, além de aprimorar minhas Soft-Skills, adquiridas em meu empreendemento, trabalhando em equipe.</p>
          <p>Atualmente continuo aprimorando minhas habilidades no desenvolvimento de projetos web, colocando-os em prática, com aprendizado contínuo.</p>
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
