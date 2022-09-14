import React from "react";
// import Title from "./Title";
import content from "../content";
import Block from "./Block";
import Paralax from "./Paralax";

function App() {
  let year = new Date().getFullYear();
  return (
    <div id="parallax-world-of-ugg">
      {/* <Title /> */}

      <Paralax paralax="parallax-one" country="" form={false} />

      <Block
        capLetterColor="first-character bo"
        paragraph1={content[0].paragraph1}
        paragraph2={content[0].paragraph2}
      />

      <Paralax paralax="parallax-two" country="ECUADOR" form={false} />

      <Block
        capLetterColor="first-character ec"
        paragraph1={content[0].paragraph1}
        paragraph2={content[0].paragraph2}
      />

      <Paralax paralax="parallax-three" country="CONTACTANOS" form={true} />

      <p className="copy-rights">Copyrights {year} © Designed by Phenomenone. </p>
    </div>
  );
}

export default App;
