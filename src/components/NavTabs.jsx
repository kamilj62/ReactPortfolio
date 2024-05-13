import { Link, useLocation } from 'react-router-dom';
import '../styles/NavTabs.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object and assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    
    <ul className="nav nav-tabs">

      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Joseph Kamil
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/AboutMe"
          className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
        </li>

        <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
