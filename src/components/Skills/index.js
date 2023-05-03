import CssIcon from '../../assets/css-3.svg';
import GitIcon from '../../assets/git-icon.svg';
import HtmlIcon from '../../assets/html-5.svg';
import JavascriptIcon from '../../assets/javascript.svg';
import NodeIcon from '../../assets/nodejs-icon-alt.svg';
import PostgreIcon from '../../assets/postgresql.svg';
import ReactIcon from '../../assets/react.svg';
import TypeormIcom from '../../assets/typeorm.svg';
import TypescriptIcon from '../../assets/typescript-icon.svg';
import KnexIcon from '../../assets/knex.svg';
import JestIcon from '../../assets/jest.svg';
import './styles.css';

function Skills() {

    return (
        <section className='skills' id='skills'>
          <div className='patch-title'>
            <h1>Skills</h1>
          </div>
          <div className='patchs'>
            <div className='patch'>
              <img className='new-icon' src={JavascriptIcon} alt='Javascript' />
              <strong>JAVASCRIPT</strong>
            </div>
            <div className='patch'>
              <img className='new-icon' src={TypescriptIcon} alt='Typescript' />
              <strong>TYPESCRIPT</strong>
            </div>
            <div className='patch'>
              <img className='new-icon' src={NodeIcon} alt='NodeJS' />
              <strong>NODEJS</strong>
            </div>
            <div className='patch'>
              <img className='new-icon' src={ReactIcon} alt='ReactJS' />
              <strong>REACTJS</strong>
            </div>
            <div className='patch'>
              <img className='new-icon' src={PostgreIcon} alt='PostgreSQL' />
              <strong>POSTGRESQL</strong>
            </div>
            <div className='patch'>
              <img className='new-icon' src={KnexIcon} alt='Knex' />
              <strong>KNEX</strong>
            </div>
            <div className='patch'>
              <img className='new-icon' src={TypeormIcom} alt='TypeORM' />
              <strong>TYPEORM</strong>
            </div>
            <div className='patch'>
              <img className='new-icon' src={JestIcon} alt='Jest' />
              <strong>JEST</strong>
            </div>
            <div className='patch'>
              <img className='new-icon' src={HtmlIcon} alt='HTML' />
              <strong>HTML5</strong>
            </div>
            <div className='patch'>
              <img className='new-icon' src={CssIcon} alt='CSS' />
              <strong>CSS3</strong>
            </div>
            <div className='patch'>
              <img className='new-icon' src={GitIcon} alt='Git' />
              <strong>GIT</strong>
            </div>
          </div>
        </section>
    );
}

export default Skills;