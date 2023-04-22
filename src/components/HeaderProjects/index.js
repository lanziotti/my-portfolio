import './styles.css';
import MiniLogoImage from '../../assets/mini-logo.png';
import { useNavigate } from 'react-router-dom';

function HeaderProjects() {
  const navigate = useNavigate();

  return (
    <header className='header'>
      <img
        className='mini-logo-image'
        src={MiniLogoImage}
        alt='Logo'
        onClick={() => navigate('/')}
      />
    </header>
  );
}

export default HeaderProjects;