import React from "react";
import content from "../content";
import Block from "./Block";
import Paralax from "./Paralax";
import Navbar from "./Navbar";


function App() {
  let year = new Date().getFullYear();
  return (
    <div id="parallax-world-of-ugg" >

      <Navbar />

      <Paralax paralax="parallax-one" country="" form={false} />

      <Block
        capLetterColor="first-character bo"
        paragraph={content[0].paragraph1}
      />

      <Paralax paralax="parallax-two" country="ECUADOR" form={false} />

      <Block
        capLetterColor="first-character ec"
        paragraph={content[0].paragraph2}
      />

      <Paralax paralax="parallax-three" country="CONTACTANOS" form={true} />

      <p className="copy-rights">Copyrights {year} © Designed by Phenomenone. </p>
    </div>
  );
}

export default App;
