import './styles.css';
import CvRodrigo from '../../assets/cv-rodrigo.pdf';
import RodrigoImage from '../../assets/rodrigo-image2.png';

function About() {

  return (
    <section className='about-me' id='about'>
      <div className='patch-title'>
        <h1>Sobre mim</h1>
      </div>
      <div className='content-about'>
        <img src={RodrigoImage} alt='Rodrigo' />
        <div className='second-about'>
          <h3>Meu nome é Rodrigo Lanziotti, tenho 35 anos, moro em Juiz de Fora/MG, sou Desenvolvedor Full-Stack, apaixonado por tecnologia e desenvolvo sites e sistemas com acessibilidade, escaláveis e lindos.</h3>
          <p>Engenheiro Civil de formação, já empreendi no ramo alimentício durante 6 anos, onde pude adquirir uma enorme experiência em gestão de negócios, financeira, de tempo e, principalmente, de pessoas, tendo de sempre estar, como líder, exercendo uma comunicação assertiva e não violenta com toda equipe, além de manter tudo sempre organizado e produtivo visando sempre o melhor possível para o cliente.</p>
          <p>Em abril de 2022 comecei a me dedicar integralmente a minha paixão ingressando no Curso de Desenvolvimento de Software da Cubos Academy, no qual conclui em dezembro do mesmo ano e que desde o início venho colocando em prática todo o conhecimento adquirido em projetos práticos, seja no Back-End, Front-End ou Full-Stack, além de aprimorar minhas Soft-Skills, adquiridas em meu empreendimento, trabalhando em equipe.</p>
          <p>Atualmente continuo aprimorando minhas habilidades no desenvolvimento de projetos web, colocando-os em prática, com aprendizado contínuo.</p>
          <a className='btn-cv' href={CvRodrigo} download>Download CV</a>
          <p>Venha! Vamos tirar seu sonho do papel e fazer o seu negócio decolar! 🚀🚀🚀</p>
        </div>
      </div>
    </section>
  );
}

export default About;