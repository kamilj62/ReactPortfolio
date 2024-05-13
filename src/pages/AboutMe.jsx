import '../styles/AboutMe.css';
import pic from '../assets/picture.JPEG';

export default function AboutMe () {
  return(
  <div className='AboutMe'>
    <h1>About Me</h1>
    <img src={pic} alt='pictureOfMe' />
    <p>
      I am a detail-oriented and dependable software developer with a background
      in full-stack development. I am highly proficient in HTML, CSS, and
      Javascript. I balance exemplary leadership, technical, and communication
      skills with a collaborative, goal-oriented mindset to execute project
      deliverables and to fulfill objectives.
    </p>
    <ul>
            <li>Phone: (248) 893-5223</li>
            <li>Email: kamilj@umich.edu </li>
            <li>4237 Via Marina apt J112 Marina Del Rey, Ca </li>
            <li>LinkedIn: <a href='https://www.linkedin.com/in/joseph-kamil/' target="_blank" rel="noreferrer">/Joseph-Kamil</a> </li> 
            <li>Portfolio: <a href='https://github.com/kamilj62' target="_blank" rel="noreferrer">kamilj62.github.com</a>  </li>
          </ul>
  </div>
  )
}



  