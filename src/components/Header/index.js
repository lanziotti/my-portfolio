import './styles.css';
import MiniLogoImage from '../../assets/mini-logo.png';
import MenuImage from '../../assets/menu.png';

function Header() {
  return (
    <header className='header'>
      <img
        className='mini-logo-image'
        src={MiniLogoImage}
        alt='Logo'
      />
      <img
        className='menu-image'
        src={MenuImage}
        alt='Menu'
      />
    </header>
  );
}

export default Header;