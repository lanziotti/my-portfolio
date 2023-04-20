import { Link } from 'react-scroll';
import ArrowUpIcon from '../../assets/arrow-up.png';
import './styles.css';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

function ScrollUp() {
    const { isScrolled, setIsScrolled } = useContext(GlobalContext);

    useEffect(() => {
      function handleScroll() {
        if (window.scrollY >= 120) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [setIsScrolled]);
  
    const arrowUpClassName = `arrow-up ${isScrolled ? 'arrow-up-off' : ''}`;

    return (
        <Link
            className={arrowUpClassName}
            ignoreCancelEvents={true}
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
        >
            <img src={ArrowUpIcon} alt='Seta para cima' />
        </Link>
    );
}

export default ScrollUp;