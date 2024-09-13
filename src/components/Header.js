import '../styles/header.scss';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

const Header = () => {


return (
    <div className="header">
        <div className="navigation">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <div className="burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        {/* <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav> */}
    </div>
  );
};

export default Header;