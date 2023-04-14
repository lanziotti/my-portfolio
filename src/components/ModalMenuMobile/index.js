import { useContext } from 'react';
import CloseIcon from '../../assets/close.png';
import HomeIcon from '../../assets/home.png';
import ProfileIcon from '../../assets/profile.png';
import SkillsIcon from '../../assets/skills.png';
import ProjectsIcon from '../../assets/projects.png';
import ContactsIcon from '../../assets/contacts.png';
import { GlobalContext } from '../../contexts/GlobalContext';
import './styles.css';
import { Link } from 'react-scroll';

function ModalMenuMobile() {
  const { setOpenMenu } = useContext(GlobalContext);

  return (
    <div className='container-menu'>
      <img
        className='close-icon'
        src={CloseIcon}
        alt='Fechar'
        onClick={() => setOpenMenu(false)}
      />
      <nav>
        <ul>
          <li>
            <img src={HomeIcon} alt='Home' />
            <Link
              ignoreCancelEvents={true}
              activeClass="active"
              to="main" spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setOpenMenu(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <img src={ProfileIcon} alt='Sobre' />
            <Link
              ignoreCancelEvents={true}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => setOpenMenu(false)}
            >
              Sobre
            </Link>
          </li>
          <li>
            <img src={SkillsIcon} alt='Skills' />
            <Link
              ignoreCancelEvents={true}
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => setOpenMenu(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <img src={ProjectsIcon} alt='Projetos' />
            Projetos
          </li>
          <li>
            <img src={ContactsIcon} alt='Contato' />
            Contato
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ModalMenuMobile;