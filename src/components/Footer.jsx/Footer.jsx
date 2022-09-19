import React from 'react'
import { Link } from 'react-router-dom'
import '../Footer.jsx/Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
      <section className="redes-sociales">
        <Link to="/"><img src="multimedia/facebook.png" alt="" /></Link>
        <Link to="/"><img src="multimedia/instagram.png" alt="" /></Link>
        <Link to="/"><img src="multimedia/whatsapp.png" alt="" /></Link>
        <Link to="/"><img src="multimedia/telegrama.png" alt="" /></Link>
      </section>

      <section className="secciones-footer">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/">Servicios</Link></li>
            <li><Link to="/">Nosotros</Link></li>
            <li><Link to="/">Privacidad</Link></li>
          </ul>
        </nav>
      </section>

      <div className="copyright">
        <p>Scarlett © 2022</p>
      </div>
    </footer>

    </>
  )
}

export default Footer