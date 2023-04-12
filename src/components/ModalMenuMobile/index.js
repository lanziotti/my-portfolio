import { useContext } from 'react';
import CloseIcon from '../../assets/close.png';
import { GlobalContext } from '../../contexts/GlobalContext';
import './styles.css';

function ModalMenuMobile() {
  const { setOpenMenu } = useContext(GlobalContext);

  return (
    <div className='container-menu'>
      <img
        src={CloseIcon}
        alt='Fechar'
        onClick={() => setOpenMenu(false)}
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
    </div>
  );
}

export default ModalMenuMobile;