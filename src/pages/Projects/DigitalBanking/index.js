import HomeDbImage from '../../../assets/home-db.png';
import MainDbImage from '../../../assets/main-db.png';
import ModalDeleteDbImage from '../../../assets/modal-delete-db.png';
import ModalDepositDbImage from '../../../assets/modal-deposit-db.png';
import ModalLoginDbImage from '../../../assets/modal-login-db.png';
import ModalUpdateDbImage from '../../../assets/modal-update-db.png';
import RegisterDbImage from '../../../assets/register-db.png';
import FooterProjects from '../../../components/FooterProjects';
import HeaderProjects from '../../../components/HeaderProjects';

function DigitalBanking() {

    return (
        <div className='container-detail-projects'>
            <HeaderProjects />
            <main className='main-db'>
                <section className='project-presentation'>
                    <div className='patch-title patch-title-db'>
                        <h1>Digital Banking</h1>
                    </div>
                    <img className='home-db-image' src={HomeDbImage} alt='Home Digital Banking' />
                    <h2>Descrição geral</h2>
                    <p>Esse projeto simula diversas funcionalidades de um Banco Digital/Caixa Eletrônico. Nele é possível: Abrir uma conta, Fazer Login no sistema, Atualizar os dados de usuário da conta, Realizar Depósitos, Saques, Transferências, Consulta ao Extrato Bancário, Encerramento de conta, Logout no sistema. Possui um lindo e interativo layout que é muito acessível e intuitivo que, com certeza, chama muito a atenção do usuário.</p>
                    <div className='btns-project'>
                        <button>
                            <a
                                href='https://banco-digital-ts-front.vercel.app'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'<O> Ver projeto'}
                            </a>
                        </button>
                        <button>
                            <a
                                href='https://github.com/lanziotti/banco-digital-ts'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'</> Ver código'}
                            </a>
                        </button>
                    </div>
                    <img src={RegisterDbImage} alt='Register Digital Banking' />
                    <img src={ModalLoginDbImage} alt='Modal Login Digital Banking' />
                </section>
                <section className='project-details'>
                    <h2>Descrição técnica</h2>
                    <h3>Back-End</h3>
                    <p>O Back-End do projeto foi desenvolvido em Node.js utilizando-se do Typescript. Foi utilizado o Express para gerenciar as requisições HTTP, o TypeORM para fazer o mapeamento e a conexão com o banco de dados PostegreSQL, o Bcrypt para criptografar dados sensíveis e o JWT para a geração dos tokens, o Zod para a realização da validação dos campos, o Jest e o Supertest para a realização dos testes unitários e de integração, e o Swagger para a documentação da API. Também foi usado outras diversas bibliotecas no auxílio do desenvolvimento do projeto como o Dotenv, Nodemon e o Faker, sendo a API, posteriormente, deployada na Cyclic.</p>
                    <img src={MainDbImage} alt='Main Digital Banking' />
                    <h3>Front-End</h3>
                    <p>O Front-End do projeto foi desenvolvido em React.js. Foi utilizado o React Router Dom para a navegação pelas diversas telas do projeto, bem como para a criação das rotas protegidas que somente o usuário logado possui acesso, o React Toastify para personalizar e emitir as notificações para o usuário, o Axios para a integração do Front-End com a API desenvolvida no Back-end e o Date Fns para auxiliar no tratamento de datas. Todas as estilizações foram desenvolvidas em CSS puro.</p>
                    <img src={ModalDepositDbImage} alt='Modal Depósito Digital Banking' />
                    <div className='btns-project'>
                        <button>
                            <a
                                href='https://banco-digital-ts-front.vercel.app'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'<O> Ver projeto'}
                            </a>
                        </button>
                        <button>
                            <a
                                href='https://github.com/lanziotti/banco-digital-ts'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'</> Ver código'}
                            </a>
                        </button>
                    </div>
                    <img src={ModalUpdateDbImage} alt='Modal Update Digital Banking' />
                    <img src={ModalDeleteDbImage} alt='Modal Delete Digital Banking' />
                </section>
            </main>
            <FooterProjects />
        </div>
    );
}

export default DigitalBanking;