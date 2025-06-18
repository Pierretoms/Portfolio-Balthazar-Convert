import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img 
          src="https://placehold.co/100x50" 
          alt="Logo de Balthazar Convert" 
          className="logo" 
        />
        <p><strong>&copy; 2025 Balthazar Convert. Tous droits réservés.</strong></p>
        <div className="social-links">
          <a href="https://www.instagram.com/balthazar_convert/" target="_blank" className="social-link" aria-label="mon compte instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="mailto:convert.balthazar@gmail.com" className="social-link" aria-label="me contacter par mail">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer