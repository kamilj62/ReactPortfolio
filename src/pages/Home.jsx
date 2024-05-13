import '../styles/Home.css'
import Container from 'react-bootstrap/Container';

export default function Home() {
    return (
      <Container>
        
        <h1 className='home'><u>Joseph G. Kamil </u></h1>

        <p className='phone'> 
          <ul>
            <li>Phone: (238) 893-5223</li>
            <li>Email: kamilj@umich.edu </li>
            <li>4237 Via Marina apt J112 Marina Del Rey, Ca </li>
            <li>LinkedIn: <a href='https://www.linkedin.com/in/joseph-kamil/' target="_blank" rel="noreferrer">/Joseph-Kamil</a> </li> 
            <li>Portfolio: <a href='https://github.com/kamilj62' target="_blank" rel="noreferrer">kamilj62.github.com</a>  </li>
          </ul>
        </p>
        
      </Container>
    );
  }
  