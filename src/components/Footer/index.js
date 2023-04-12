import CopyrightIcon from '../../assets/copyright.png';
import MiniLogoImage from '../../assets/mini-logo.png';
import WhatsAppIcon from '../../assets/whatsapp.png';
import GithubIcon from '../../assets/github.png';
import LinkedinIcon from '../../assets/linkedin.png';
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
          <li>Home</li>
          <li>Sobre</li>
          <li>Skills</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </nav>
      <div className='footer-icons'>
        <img src={WhatsAppIcon} alt='WhatsApp' />
        <img src={GithubIcon} alt='GitHub' />
        <img src={LinkedinIcon} alt='LinkedIn' />
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