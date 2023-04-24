import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import EmailIcon from '../../assets/gmail.png';
import LinkedinIcon from '../../assets/linkedin.png';
import WhatsappIcon from '../../assets/whatsapp.png';
import { GlobalContext } from '../../contexts/GlobalContext';
import { notifyError, notifySucess } from '../../utils/notifications';
import './styles.css';

function Contact() {
    const {
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage
    } = useContext(GlobalContext);

    async function sendEmail(e) {
        e.preventDefault();

        try {
            if (name === '' || email === '' || message === '') {
                return notifyError('Preeencha todos os campos!');
            }

            const templateParams = {
                from_name: name,
                message,
                email
            }

            await emailjs.send('service_h3dbyw1', 'template_07275oe', templateParams, 'L3QLQcn_pKXQBm0OV');

            notifySucess('Mensagem enviada! Em breve retornarei o seu contato! 😉');

            setName('');
            setEmail('');
            setMessage('');

        } catch (error) {
            notifyError('Ops...ocorreu algum erro. Tente novamente mais tarde ou utilize as outras formas de contato.');
        }

    }

    return (
        <section className='contact' id='contact'>
            <div className='patch-title'>
                <h1>Contato</h1>
            </div>
            <strong>Vamos trabalhar juntos!</strong>
            <div className='patchs-contact'>
                <div className='patch-contact'>
                    <div className='patch-contact-title'>
                        <img src={EmailIcon} alt='E-mail' />
                        <strong>E-mail</strong>
                    </div>
                    <span>rodrigolanziotti@yahoo.com.br</span>
                    <a
                        href='mailto:rodrigolanziotti@yahoo.com.br'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Entre em contato...
                    </a>
                </div>
                <div className='patch-contact'>
                    <div className='patch-contact-title'>
                        <img src={WhatsappIcon} alt='WhatsApp' />
                        <strong>WhatsApp</strong>
                    </div>
                    <span>(32)99849-8002</span>
                    <a
                        href='https://api.whatsapp.com/send?phone=5532998498002&text=Ol%C3%A1,%20tudo%20bem?%20Seja%20muito%20bem%20vindo(a)!%20Podemos%20conversar%20sobre%20possivelmente%20trabalharmos%20juntos!?'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Entre em contato...
                    </a>
                </div>
                <div className='patch-contact'>
                    <div className='patch-contact-title'>
                        <img src={LinkedinIcon} alt='LinkedIn' />
                        <strong>LinkedIn</strong>
                    </div>
                    <span>Rodrigo Lanziotti</span>
                    <a
                        href='https://www.linkedin.com/in/rodrigo-lanziotti-16a64966/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Entre em contato...
                    </a>
                </div>
            </div>
            <div className='container-form'>
                <strong>Já tem uma ideia para o seu projeto?</strong>
                <span>Descreva abaixo</span>
                <form
                    className='content-form'
                    onSubmit={sendEmail}
                >
                    <div className='container-input'>
                        <label htmlFor='name'>Nome</label>
                        <input
                            placeholder='Digite seu Nome'
                            type='text'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='container-input'>
                        <label htmlFor='email'>E-mail</label>
                        <input
                            placeholder='Digite seu E-mail'
                            type='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='container-input'>
                        <label htmlFor='message'>Projeto</label>
                        <textarea
                            placeholder='Descreva seu projeto...'
                            type='text'
                            name='message'
                            cols="30"
                            rows="12"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className='form-btn'>
                        <button>Enviar Mensagem</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;