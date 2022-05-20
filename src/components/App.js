import React from "react";
import Title from './Title';
import content from "../content";
import Block from "./Block";

function App() {
  return (
    <div id="parallax-world-of-ugg">

      <Title />

      <section>
        <div className="parallax-one">
          <h2> BOLIVIA </h2>
        </div>
      </section>

      <Block 
        capLetterColor="first-character bo" 
        paragraph1={content[0].paragraph1} 
        paragraph2={content[0].paragraph2}
      />

      <section>
        <div className="parallax-two">
          <h2>ECUADOR</h2>
        </div>
      </section>

      <Block 
        capLetterColor="first-character ec" 
        paragraph1={content[0].paragraph1} 
        paragraph2={content[0].paragraph2}
      />

      <section>
        <div className="parallax-three">
        <h2>CONTACTANOS</h2>
          <div className="container">
            <form action="action_page.php">
              {/* <label for="fname">First Name</label> */}
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Nombre(s) ..." 
              />

              {/* <label for="lname">Last Name</label> */}
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Apellido(s) ..."
              />

              {/* <label for="lname">Last Name</label> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo @ Electroncico ..."
              />

              {/* <label for="subject">Subject</label> */}
              <textarea
                id="subject"
                name="subject"
                placeholder="Escriba su mensaje aca. Recuerde enviar su informacion de contacto ..."
                style={{ height: "200px" }}
              ></textarea>

              <input type="submit" value="Enviar" />
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default App;
