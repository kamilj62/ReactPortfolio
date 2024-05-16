import '../styles/Portfolio.css'
import weatherDashboard from '../assets/weatherDashboard.png';
import javaScriptGame from '../assets/JavaScriptGame'
import balanceBasics from '../assets/balanceBasics.png'
import techBlog from '../assets/techBlog.png'
import noteTaker from '../assets/noteTaker.png'
import JATE from '../assets/JATE.png'

export default function Portfolio() {
    return (
      <>
      <h1 className="Portfolio">Portfolio </h1>

      <div className='image'>
        <figure>
          <a href='https://kamilj62.github.io/weatherDashboard/'>
            <img src={weatherDashboard} alt='weatherDashboard' />
          </a>
          <figcaption>
            <a href='https://github.com/kamilj62/weatherDashboard'>Weather Dashboard</a>
          </figcaption>
        </figure>
      
        <figure>
          <a href='https://kamilj62.github.io/javaScriptGame/'>
            <img src={javaScriptGame} alt='javaScriptGame' />
          </a>
          <figcaption>
            <a href='https://github.com/kamilj62/javaScriptGame'>JavaScript Game</a>
          </figcaption>
        </figure>

        <figure>
          <a href='https://balance-basics62-e0d5ef0b08c5.herokuapp.com/'>
            <img src={balanceBasics} alt='balanceBasics' />
          </a>
          <figcaption>
            <a href='https://github.com/kamilj62/balance-basics'>Balance Basics</a>
          </figcaption>
        </figure>

        <figure>
          <a href='https://tech-blog62-6e7ae86e4f6b.herokuapp.com/'>
            <img src={techBlog} alt='techBlog' />
          </a>
          <figcaption>
            <a href='https://github.com/kamilj62/techBlog'>Tech Blog</a>
          </figcaption>
        </figure>

        <figure>
          <a href='https://notetaker62-aaf413e4bf8d.herokuapp.com/'>
            <img src={noteTaker} alt='noteTaker' />
          </a>
          <figcaption>
            <a href='https://github.com/kamilj62/noteTaker'>Note Taker</a>
          </figcaption>
        </figure>

        <figure>
          <a href='https://jate-9x0f.onrender.com/'>
            <img src={JATE} alt='JATE' />
          </a>
          <figcaption>
            <a href='https://github.com/kamilj62/JATE'>JATE</a>
          </figcaption>
      </figure>
      </div> 
      </>
    )
  }