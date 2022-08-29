import React from 'react'
import '../Footer.jsx/Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
      <section className="redes-sociales">
        <a href=""><img src="multimedia/facebook.png" alt="" /></a>
        <a href=""><img src="multimedia/instagram.png" alt="" /></a>
        <a href=""><img src="multimedia/whatsapp.png" alt="" /></a>
        <a href=""><img src="multimedia/telegrama.png" alt="" /></a>
      </section>

      <section className="secciones-footer">
        <nav>
          <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Servicios</a></li>
            <li><a href="">Nosotros</a></li>
            <li><a href="">Privacidad</a></li>
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