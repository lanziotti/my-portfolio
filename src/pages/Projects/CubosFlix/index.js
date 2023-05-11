import FooterProjects from '../../../components/FooterProjects';
import HeaderProjects from '../../../components/HeaderProjects';
import HomeCubosFlixImage from '../../../assets/home-cubos-flix.png';
import HomeCubosFlixLightImage from '../../../assets/flix-home-light.png';
import ModalCubosFlixImage from '../../../assets/flix-modal.png';
import ModalCubosFlixNextImage from '../../../assets/flix-modal-2.png';

function CubosFlix() {
    return (
        <div className='container-detail-projects'>
            <HeaderProjects />
            <main className='main-flix'>
                <section className='project-presentation'>
                    <div className='patch-title patch-title-cp'>
                        <h1>Cubos Flix</h1>
                    </div>
                    <img src={HomeCubosFlixImage} alt='Home Cubos Flix' />
                    <h2>Descrição geral</h2>
                    <p>O projeto consiste de uma aplicação de uma página de streaming de filmes utilizando uma API de terceiros para popular todo o projeto. O layout ficou muito bonito, agradável e acessível ao usuário, já que conta com paginação dos filmes, input de busca e filtragem, modal com descrições detalhadas de cada filme, temas light e dark.</p>
                    <div className='btns-project'>
                        <button>
                            <a
                                href='https://pagina-streaming-filmes.vercel.app'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'<O> Ver projeto'}
                            </a>
                        </button>
                        <button>
                            <a
                                href='https://github.com/lanziotti/pagina-streaming-filmes'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'</> Ver código'}
                            </a>
                        </button>
                    </div>
                    <img src={HomeCubosFlixLightImage} alt='Cubos Flix' />
                </section>
                <section className='project-details'>
                    <h2>Descrição técnica</h2>
                    <h3>Back-End</h3>
                    <p>Esse projeto não teve a necessidade de um projeto de Back-End desenvolvido por mim, já que foi usada uma API de terceiros.</p>
                    <img src={ModalCubosFlixImage} alt='Cubos Flix' />
                    <h3>Front-End</h3>
                    <p>O Front-End do projeto foi desenvolvido em React.js. Todas as estilizações foram desenvolvidas em CSS puro. Nesse projeto não foi aplicada responsividade.</p>
                    <div className='btns-project'>
                        <button>
                            <a
                                href='https://pagina-streaming-filmes.vercel.app'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'<O> Ver projeto'}
                            </a>
                        </button>
                        <button>
                            <a
                                href='https://github.com/lanziotti/pagina-streaming-filmes'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'</> Ver código'}
                            </a>
                        </button>
                    </div>
                    <img src={ModalCubosFlixNextImage} alt='Cubos Flix' />
                </section>
            </main>
            <FooterProjects />
        </div>
    );
}

export default CubosFlix;