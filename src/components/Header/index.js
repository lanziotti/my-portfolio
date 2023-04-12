import './styles.css';
import MiniLogoImage from '../../assets/mini-logo.png';
import MenuImage from '../../assets/menu.png';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

function Header() {
  const { setOpenMenu } = useContext(GlobalContext);

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
        onClick={() => setOpenMenu(true)}
      />
    </header>
  );
}

export default Header;