import './styles.css';
import MiniLogoImage from '../../assets/mini-logo.png';
import LogoImage from '../../assets/logo2.png';
import { useNavigate } from 'react-router-dom';

function HeaderProjects() {
  const navigate = useNavigate();

  return (
    <header className='header'>
      <img
        className='logo-image logo-image-projects'
        src={LogoImage}
        alt='Logo'
        onClick={() => navigate('/')}
      />
      <img
        className='mini-logo-image mini-logo-image-projects'
        src={MiniLogoImage}
        alt='Logo'
        onClick={() => navigate('/')}
      />
    </header>
  );
}

export default HeaderProjects;