import React from "react";
import Block from "./Block";
import Paralax from "./Paralax";
import Navbar from "./Navbar";
import Logo from "./Logo";



function App() {
  let year = new Date().getFullYear();
  return (
    <div id="parallax-world-of-ugg" >

      <Navbar />

      <Paralax paralax="parallax-one" country="" form={false} />
      <div id="about-us">
      <h5>Sobre Nosotros</h5>
      </div>

      <Block/>
      
      <Paralax paralax="parallax-two" country="ECUADOR" form={false} />
    
      <Logo/>

      <Paralax paralax="parallax-three" country="CONTACTANOS" form={true} />

      <p className="copy-rights">Copyrights {year} © Designed by Phenomenone. </p>
    </div>
  );
}

export default App;
