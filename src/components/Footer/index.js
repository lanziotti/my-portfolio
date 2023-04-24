import { Link } from 'react-scroll';
import CopyrightIcon from '../../assets/copyright.png';
import GithubIcon from '../../assets/github.png';
import LinkedinIcon from '../../assets/linkedin.png';
import MiniLogoImage from '../../assets/mini-logo.png';
import WhatsAppIcon from '../../assets/whatsapp.png';
import './styles.css';

function Footer() {
  return (
    <footer className='footer'>
      <img
        className='mini-logo-footer'
        src={MiniLogoImage}
        alt='Logo'
      />
      <nav>
        <ul>
          <li>
            <Link
              ignoreCancelEvents={true}
              activeClass="active"
              to="main" spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              ignoreCancelEvents={true}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              ignoreCancelEvents={true}
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              ignoreCancelEvents={true}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              ignoreCancelEvents={true}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <div className='footer-icons'>
        <a
          href='https://api.whatsapp.com/send?phone=5532998498002&text=Ol%C3%A1,%20tudo%20bem?%20Seja%20muito%20bem%20vindo(a)!%20Podemos%20conversar%20sobre%20possivelmente%20trabalharmos%20juntos!?'
          target='_blank'
          rel='noreferrer'
        >
          <img src={WhatsAppIcon} alt='WhatsApp' />
        </a>
        <a
          href='https://github.com/lanziotti'
          target='_blank'
          rel='noreferrer'
        >
          <img src={GithubIcon} alt='GitHub' />
        </a>
        <a
          href='https://www.linkedin.com/in/rodrigo-lanziotti-16a64966/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={LinkedinIcon} alt='LinkedIn' />
        </a>
      </div>
      <div className='container-copyright'>
        <img
          className='copyright'
          src={CopyrightIcon}
          alt='Copyright'
        />
        <span>Rodrigo Lanziotti. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;