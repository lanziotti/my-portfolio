import { useNavigate } from 'react-router-dom';
import CopyrightIcon from '../../assets/copyright.png';
import GithubIcon from '../../assets/github.png';
import LinkedinIcon from '../../assets/linkedin.png';
import MiniLogoImage from '../../assets/mini-logo.png';
import WhatsAppIcon from '../../assets/whatsapp.png';
import './styles.css';

function FooterProjects() {
  const navigate = useNavigate();

  return (
    <footer className='footer'>
      <img
        className='mini-logo-footer mini-logo-footer-projects'
        src={MiniLogoImage}
        alt='Logo'
        onClick={() => navigate('/')}
      />
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

export default FooterProjects;