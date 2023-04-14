import { useContext } from 'react';
import { Link } from 'react-scroll';
import ArrowUpIcon from '../../assets/arrow-up.png';
import CssIcon from '../../assets/css.png';
import GitIcon from '../../assets/git.png';
import GithubIcon from '../../assets/github.png';
import HtmlIcon from '../../assets/html.png';
import JavascriptIcon from '../../assets/javascript.png';
import LinkedinIcon from '../../assets/linkedin.png';
import NodeIcon from '../../assets/node.png';
import ReactIcon from '../../assets/react.png';
import MyImage from '../../assets/rodrigo-image.jpeg';
import TypescriptIcon from '../../assets/typescript.png';
import WhatsappIcon from '../../assets/whatsapp.png';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ModalMenuMobile from '../../components/ModalMenuMobile';
import { GlobalContext } from '../../contexts/GlobalContext';
import './styles.css';

function Home() {
  const { openMenu } = useContext(GlobalContext);

  window.addEventListener('scroll', function () {
    const scrollUp = document.querySelector('.arrow-up');

    if (this.scrollY <= 120) scrollUp.classList.add('arrow-up-off');
    else scrollUp.classList.remove('arrow-up-off');
  });

  return (
    <div className='container'>
      <Header />
      <main id='main'>
        <section className='presentation'>
          <div className='container-presentation'>
            <h2>Olá, bem vindo(a)! Sou o</h2>
            <h1 className='typing-animation'>Rodrigo Lanziotti</h1>
            <h3>Desenvolvedor Full-Stack</h3>
          </div>
          <div className='presentation-icons'>
            <a href='https://api.whatsapp.com/send?phone=5532998498002&text=Ol%C3%A1,%20tudo%20bem?%20Seja%20muito%20bem%20vindo(a)!%20Podemos%20conversar%20sobre%20possivelmente%20trabalharmos%20juntos!?'>
              <img src={WhatsappIcon} alt='WhatsApp' />
            </a>
            <a href='https://github.com/lanziotti'>
              <img src={GithubIcon} alt='GitHub' />
            </a>
            <a href='https://www.linkedin.com/in/rodrigo-lanziotti-16a64966/'>
              <img src={LinkedinIcon} alt='LinkedIn' />
            </a>
          </div>
          <div className='my-image'>
            <img src={MyImage} alt='Rodrigo Lanziotti' />
          </div>
        </section>
        <section className='about-me' id='about'>
          <div className='patch-title'>
            <h1>Sobre mim</h1>
          </div>
          <h3>Meu nome é Rodrigo Lanziotti, tenho 35 anos, moro em Juiz de Fora/MG, sou Desenvolvedor Full-Stack e apaixonado por tecnologia.</h3>
          <p>Engenheiro Civil de formação, já empreendi no ramo alimentício durante 6 anos, onde pude adquirir uma enorme experiência em gestão de negócios, financeira, de tempo e, principalmente, de pessoas, tendo de sempre estar, como líder, exercendo uma comunicação acertiva e não violenta com toda equipe, além de manter tudo sempre organizado e produtivo visando sempre o melhor possível para o cliente.</p>
          <p>Em abril de 2022 comecei a me dedicar integralmente a minha paixão ingressando no Curso de Desenvolvimento de Software da Cubos Academy, no qual conclui em dezembro do mesmo ano e que desde o início venho colocando em prática todo o conhecimento adquirido em projetos práticos, seja no Back-End, Front-End ou Full-Stack, além de aprimorar minhas Soft-Skills, adquiridas em meu empreendemento, trabalhando em equipe.</p>
          <p>Atualmente continuo aprimorando minhas habilidades no desenvolvimento de projetos web, colocando-os em prática, com aprendizado contínuo.</p>
        </section>
        <section className='skills' id='skills'>
          <div className='patch-title'>
            <h1>Skills</h1>
          </div>
          <div className='patchs'>
            <div className='patch'>
              <img src={JavascriptIcon} alt='Javascript' />
              <strong>JAVASCRIPT</strong>
            </div>
            <div className='patch'>
              <img src={TypescriptIcon} alt='Typescript' />
              <strong>TYPESCRIPT</strong>
            </div>
            <div className='patch'>
              <img src={NodeIcon} alt='NodeJS' />
              <strong>NODEJS</strong>
            </div>
            <div className='patch'>
              <img src={ReactIcon} alt='ReactJS' />
              <strong>REACTJS</strong>
            </div>
            <div className='patch'>
              <img src={HtmlIcon} alt='HTML' />
              <strong>HTML</strong>
            </div>
            <div className='patch'>
              <img src={CssIcon} alt='CSS' />
              <strong>CSS</strong>
            </div>
            <div className='patch'>
              <img src={GitIcon} alt='Git' />
              <strong>GIT</strong>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Link
        className='arrow-up'
        ignoreCancelEvents={true}
        activeClass="active"
        to="main" spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <img src={ArrowUpIcon} alt='Seta para cima' />
      </Link>
      {
        openMenu &&
        <ModalMenuMobile />
      }
    </div>
  );
}

export default Home;
