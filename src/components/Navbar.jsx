import React from "react";

function Navbar (){


    return (
    <div>
      <header className="page-header">
          <nav className="page-header-navbar">
          <ul>
            <a href="/"><li>Inicio</li></a>
            <a href="#contact-us"><li>Sobre Nosotros</li></a>
            <a href="#scroll-footer"><li>Contacto</li></a>
          </ul>
        </nav>
      </header>
    </div>
    );

}

export default Navbar;

