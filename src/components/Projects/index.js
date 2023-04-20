import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from 'react-router-dom';
import HomeFlix from '../../assets/home-cubos-flix.png';
import HomePuzzle from '../../assets/home-cubos-puzzle.png';
import HomeDbImage from '../../assets/home-db.png';
import HomeDindinImage from '../../assets/home-dindin.png';
import './styles.css';
import FingerUpIcon from '../../assets/finger-up.png';

function Projects() {
    const navigate = useNavigate();

    return (
        <section className='projects' id='projects'>
            <div className='patch-title'>
                <h1>Projetos</h1>
            </div>
            <strong>Alguns projetos desenvolvidos por mim</strong>
            <div className='carousel'>
                <Carousel
                    showThumbs={false}
                    showStatus={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    transitionTime={3}
                >
                    <div className='card' onClick={() => {navigate('/digital-banking')}}>
                        <img src={HomeDbImage} alt='Digital Banking' />
                    </div>
                    <div className='card' onClick={() => {navigate('/dindin')}}>
                        <img src={HomeDindinImage} alt='Dindin' />
                    </div>
                    <div className='card' onClick={() => {navigate('/cubos-puzzle')}}>
                        <img src={HomePuzzle} alt='Cubos Puzzle' />
                    </div>
                    <div className='card' onClick={() => {navigate('/cubos-flix')}}>
                        <img src={HomeFlix} alt='Cubos Flix' />
                    </div>
                </Carousel>
            </div>
            <div className='container-finger'>
                <img src={FingerUpIcon} alt='Apontando para cima' />
                <strong>Escolha o projeto e clique para saber mais detalhes</strong>
            </div>
        </section>
    );
}

export default Projects;