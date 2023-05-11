import HomeDindinImage from '../../../assets/home-dindin.png';
import MainDindinImage from '../../../assets/main-dindin.png';
import ModalRegisterDindinImage from '../../../assets/modal-register-dindin.png';
import ModalUserDindinImage from '../../../assets/modal-user-dindin.png';
import RegisterDindinImage from '../../../assets/register-dindin.png';
import FooterProjects from '../../../components/FooterProjects';
import HeaderProjects from '../../../components/HeaderProjects';

function Dindin() {
    return (
        <div className='container-detail-projects'>
            <HeaderProjects />
            <main className='main-dindin'>
                <section className='project-presentation'>
                    <div className='patch-title'>
                        <h1>Dindin</h1>
                    </div>
                    <img src={HomeDindinImage} alt='Home Dindin' />
                    <h2>Descrição geral</h2>
                    <p>Esse projeto consiste de uma aplicação para controle financeiro pessoal. Dentre suas diversas funcionalidades estão: Cadastro de usuário no sistema, Login do usuário cadastrado, Edição do perfil do usuário, Cadastro de uma transação, Edição de uma transação, Exclusão de uma transação, Filtragem das transações por categoria e Ordenação das transações por data, Logout do usuário do sistema.</p>
                    <div className='btns-project'>
                        <button>
                            <a
                                href='https://dindin-phi.vercel.app/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'<O> Ver projeto'}
                            </a>
                        </button>
                        <button>
                            <a
                                href='https://github.com/lanziotti/Dindin'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'</> Ver código'}
                            </a>
                        </button>
                    </div>
                    <img src={RegisterDindinImage} alt='Register Dindin' />
                </section>
                <section className='project-details'>
                    <h2>Descrição técnica</h2>
                    <h3>Back-End</h3>
                    <p>O Back-End do projeto foi desenvolvido em Node.js. Foi utilizado o Express para gerenciar as requisições HTTP, o Knex para fazer o mapeamento e a conexão com o banco de dados PostegreSQL, o Bcrypt para criptografar dados sensíveis e o JWT para a geração dos tokens, o Joi para a realização da validação dos campos, o Jest e o Supertest para a realização dos testes unitários e de integração, e o Swagger para a documentação da API. Também foi usado outras diversas bibliotecas no auxílio do desenvolvimento do projeto como o Dotenv, Nodemon e o Faker, sendo a API, posteriormente, deployada na Cyclic.</p>
                    <img src={MainDindinImage} alt='Main Dindin' />
                    <h3>Front-End</h3>
                    <p>O Front-End do projeto foi desenvolvido em React.js. Foi utilizado o React Router Dom para a navegação pelas diversas telas do projeto, bem como para a criação das rotas protegidas que somente o usuário logado possui acesso, o React Toastify para personalizar e emitir as notificações para o usuário, o Axios para a integração do Front-End com a API desenvolvida no Back-end e o Date Fns para auxiliar no tratamento de datas. Todas as estilizações foram desenvolvidas em CSS puro.</p>
                    <img src={ModalRegisterDindinImage} alt='Modal Register Dindin' />
                    <div className='btns-project'>
                        <button>
                            <a
                                href='https://dindin-phi.vercel.app/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'<O> Ver projeto'}
                            </a>
                        </button>
                        <button>
                            <a
                                href='https://github.com/lanziotti/Dindin'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {'</> Ver código'}
                            </a>
                        </button>
                    </div>
                    <img src={ModalUserDindinImage} alt='Modal User Dindin' />
                </section>
            </main>
            <FooterProjects />
        </div>
    );
}

export default Dindin;