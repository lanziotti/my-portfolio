import { Link } from 'react-scroll';
import ArrowUpIcon from '../../assets/arrow-up.png';
import './styles.css';

function ScrollUp() {
    window.addEventListener('scroll', function () {
        const scrollUp = document.querySelector('.arrow-up');

        if (this.scrollY >= 120) scrollUp.classList.add('arrow-up-off');
        else scrollUp.classList.remove('arrow-up-off');
    });

    return (
        <Link
            className='arrow-up'
            ignoreCancelEvents={true}
            activeClass="active"
            to="main" spy={true}
            smooth={true}
            offset={0}
            duration={500}
        >
            <img src={ArrowUpIcon} alt='Seta para cima' />
        </Link>
    );
}

export default ScrollUp;