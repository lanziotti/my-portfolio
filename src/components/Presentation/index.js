import GithubIcon from '../../assets/github.png';
import LinkedinIcon from '../../assets/linkedin.png';
import MyImage from '../../assets/rodrigo-image-mobile.png';
import WhatsappIcon from '../../assets/whatsapp.png';
import './styles.css';

function Presentation() {

    return (
        <section className='presentation' id='presentation'>
            <div className='container-presentation'>
                <h2>Olá, bem vindo(a)! Sou o</h2>
                <h1 className='typing-animation'>Rodrigo Lanziotti</h1>
                <h3>Desenvolvedor Full-Stack</h3>
            </div>
            <div className='presentation-icons'>
                <a href='https://api.whatsapp.com/send?phone=5532998498002&text=Ol%C3%A1,%20tudo%20bem?%20Seja%20muito%20bem%20vindo(a)!%20Podemos%20conversar%20sobre%20possivelmente%20trabalharmos%20juntos!?'>
                    <img src={WhatsappIcon} alt='WhatsApp' />
                </a>
                <a href='https://github.com/lanziotti'>
                    <img src={GithubIcon} alt='GitHub' />
                </a>
                <a href='https://www.linkedin.com/in/rodrigo-lanziotti-16a64966/'>
                    <img src={LinkedinIcon} alt='LinkedIn' />
                </a>
            </div>
            <div className='my-image'>
                <img src={MyImage} alt='Rodrigo Lanziotti' />
            </div>
        </section>
    );
}

export default Presentation;