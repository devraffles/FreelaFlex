import './header.css';
import { Link } from 'react-router-dom';
import {useState} from "react";
import Logo from '../switchLogo/switchLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faBars, faX } from '@fortawesome/free-solid-svg-icons'

export default function Header({ handleChange, isChecked }) {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
       <header class="header" data-aos="fade-down" data-aos-duration="1600">
            <a class="login" href="/">
                <Logo isDarkTheme={isChecked} id="logo" class="logo" alt="logo"/>
            </a>
            <div className='menu' id={menuOpen ? "open" : ""} onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <FontAwesomeIcon icon={faBars} size='2x' className='H' id={menuOpen ? "open" : ""}/>
                <FontAwesomeIcon icon={faX} size='2x' className='X' id={menuOpen ? "open" : ""}/>
            </div>
            <nav className='functions'>
                <ul className={menuOpen ? "open" : ""}>
                    <Link to="/projeto">
                        <li><a>Projetos</a></li>
                    </Link>
                    <li><a>Como Funciona?</a></li>
                    <li><a>Serviços</a></li>
                </ul>
            </nav>
            <div className='toggle-container' id={menuOpen ? "open" : ""}>
                <input 
                    type="checkbox" 
                    id="check" 
                    class="toggle"
                    onChange={handleChange}
                    checked={isChecked}
                    />
                <label 
                    class="label" 
                    for="toggle"
                    htmlFor="check"
                    >
                    <FontAwesomeIcon icon={faSun} />
                    <FontAwesomeIcon icon={faMoon} />
                    <label class="ball"></label>
                </label>
            </div>
        </header>
    );
}
