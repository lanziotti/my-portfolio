import './styles.css';
import MiniLogoImage from '../../assets/mini-logo.png';
import MenuImage from '../../assets/menu.png';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import LogoImage from '../../assets/logo2.png';
import { Link } from 'react-scroll';

function Header() {
  const { setOpenMenu } = useContext(GlobalContext);

  return (
    <header className='header'>
      <img
        className='logo-image'
        src={LogoImage}
        alt='Logo'
      />
      <img
        className='mini-logo-image'
        src={MiniLogoImage}
        alt='Logo'
      />
      <nav>
        <ul>
          <li>
            <Link
              ignoreCancelEvents={true}
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setOpenMenu(false)}
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
              offset={-40}
              duration={500}
              onClick={() => setOpenMenu(false)}
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
              offset={-70}
              duration={500}
              onClick={() => setOpenMenu(false)}
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
              offset={-70}
              duration={500}
              onClick={() => setOpenMenu(false)}
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
              offset={-70}
              duration={500}
              onClick={() => setOpenMenu(false)}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
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