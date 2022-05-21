import React from "react";
import Title from './Title';
import content from "../content";
import Block from "./Block";
import Paralax from "./Paralax";
import Footer from "./Footer";

function App() {
  return (
    <div id="parallax-world-of-ugg">

      <Title />

      <Paralax 
        paralax="parallax-one"
        country="BOLIVIA"
        form={false}
        />

      <Block 
        capLetterColor="first-character bo" 
        paragraph1={content[0].paragraph1} 
        paragraph2={content[0].paragraph2}
      />

      <Paralax 
        paralax="parallax-two"
        country="ECUADOR"
        form={false}
      />

      <Block 
        capLetterColor="first-character ec" 
        paragraph1={content[0].paragraph1} 
        paragraph2={content[0].paragraph2}
      />

      <Paralax 
        paralax="parallax-three"
        country="CONTACTANOS"
        form={true}
      />

      <Footer />
      
    </div>
  );
}

export default App;
