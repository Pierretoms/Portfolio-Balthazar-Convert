import React, { useState } from 'react';
import "./Header.scss"

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
        <nav>
            <h1>Balthazar Convert</h1>

            <button className="burger" onClick={toggleMenu} aria-label="Menu mobile">
              <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>

            <ul className={menuOpen ? "open" : ""}>
                <li><a href='#about'>A propos</a></li>
                <li><a href='#gallery'>Galerie</a></li>
                <li><a href="mailto:convert.balthazar@gmail.com" aria-label="me contacter par mail">Contact</a></li>
                <li><a href="https://www.instagram.com/balthazar_convert/" target="_blank" className="social-link" aria-label="mon compte instagram">
                <i className="fa-brands fa-instagram"></i></a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header