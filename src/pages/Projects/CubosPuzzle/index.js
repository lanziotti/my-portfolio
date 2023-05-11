import HomeCubosPuzzleImage from '../../../assets/home-cubos-puzzle.png';
import CubosPuzzleFinishImage from '../../../assets/puzzle-finish.png';
import CubosPuzzleMiddleImageNext from '../../../assets/puzzle-middle-2.png';
import CubosPuzzleMiddleImage from '../../../assets/puzzle-middle.png';
import CubosPuzzleOpenImage from '../../../assets/puzzle-open.png';
import FooterProjects from '../../../components/FooterProjects';
import HeaderProjects from '../../../components/HeaderProjects';

function CubosPuzzle() {
    return (
        <div className='container-detail-projects'>
            <HeaderProjects />
            <main className='main-puzzle'>
                <section className='project-presentation'>
                    <div className='patch-title patch-title-cp'>
                        <h1>Cubos Puzzle</h1>
                    </div>
                    <img src={HomeCubosPuzzleImage} alt='Home Cubos Puzzle' />
                    <h2>Descrição geral</h2>
                    <p>O projeto consiste de uma aplicação de um Jogo da Memória simples com cartas com imagens sobre temas de programação em geral. Possui layout bastante bonito, agradável e intuituivo para o usuário, o que o faz ser um ótimo divertimento nas horas vagas.</p>
                    <div className='btns-project'>
                        <button>
                            <a
                                href='https://jogo-memoria-liart.vercel.app'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'<O> Ver projeto'}
                            </a>
                        </button>
                        <button>
                            <a
                                href='https://github.com/lanziotti/jogo-memoria'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'</> Ver código'}
                            </a>
                        </button>
                    </div>
                    <img src={CubosPuzzleOpenImage} alt='Cubos Puzzle' />
                </section>
                <section className='project-details'>
                    <h2>Descrição técnica</h2>
                    <h3>Back-End</h3>
                    <p>Esse projeto não teve a necessidade de um projeto de Back-End.</p>
                    <img src={CubosPuzzleMiddleImage} alt='Cubos Puzzle' />
                    <h3>Front-End</h3>
                    <p>O Front-End do projeto foi desenvolvido em React.js. Todas as estilizações foram desenvolvidas em CSS puro. Nesse projeto não foi aplicada responsividade.</p>
                    <img src={CubosPuzzleMiddleImageNext} alt='Cubos Puzzle' />
                    <div className='btns-project'>
                        <button>
                            <a
                                href='https://jogo-memoria-liart.vercel.app'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'<O> Ver projeto'}
                            </a>
                        </button>
                        <button>
                            <a
                                href='https://github.com/lanziotti/jogo-memoria'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'</> Ver código'}
                            </a>
                        </button>
                    </div>
                    <img src={CubosPuzzleFinishImage} alt='Cubos Puzzle' />
                </section>
            </main>
            <FooterProjects />
        </div>
    );
}

export default CubosPuzzle;