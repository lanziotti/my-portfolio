import CssIcon from '../../assets/css.png';
import GitIcon from '../../assets/git.png';
import HtmlIcon from '../../assets/html.png';
import JavascriptIcon from '../../assets/javascript.png';
import NodeIcon from '../../assets/node.png';
import ReactIcon from '../../assets/react.png';
import TypescriptIcon from '../../assets/typescript.png';
import './styles.css';

function Skills() {

    return (
        <section className='skills' id='skills'>
          <div className='patch-title'>
            <h1>Skills</h1>
          </div>
          <div className='patchs'>
            <div className='patch'>
              <img src={JavascriptIcon} alt='Javascript' />
              <strong>JAVASCRIPT</strong>
            </div>
            <div className='patch'>
              <img src={TypescriptIcon} alt='Typescript' />
              <strong>TYPESCRIPT</strong>
            </div>
            <div className='patch'>
              <img src={NodeIcon} alt='NodeJS' />
              <strong>NODEJS</strong>
            </div>
            <div className='patch'>
              <img src={ReactIcon} alt='ReactJS' />
              <strong>REACTJS</strong>
            </div>
            <div className='patch'>
              <img src={HtmlIcon} alt='HTML' />
              <strong>HTML</strong>
            </div>
            <div className='patch'>
              <img src={CssIcon} alt='CSS' />
              <strong>CSS</strong>
            </div>
            <div className='patch'>
              <img src={GitIcon} alt='Git' />
              <strong>GIT</strong>
            </div>
          </div>
        </section>
    );
}

export default Skills;