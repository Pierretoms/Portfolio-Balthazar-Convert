import React from 'react'
import "./Header.scss"

function Header() {
  return (
    <header>
        <nav>
            <h1>Balthazar Convert</h1>
            <ul>
                <li><a href='#about'>A propos</a></li>
                <li><a href='#gallery'>Galerie</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href="#" target="_blank" className="social-link" aria-label="mon compte instagram">
                <i className="fa-brands fa-instagram"></i></a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header