import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='Footer'>
            <a href='https://github.com/kamilj62'>
                <FontAwesomeIcon icon={faGithub} size="6x" />
            </a>
            <a href='https://www.linkedin.com/in/joseph-kamil/'>
                <FontAwesomeIcon icon={faLinkedin} size="6x" />
            </a>
            <a href='https://twitter.com/kamilj62'>
                <FontAwesomeIcon icon={faXTwitter} size="6x" />
            </a>
        </div>
    );
}

export default Footer;