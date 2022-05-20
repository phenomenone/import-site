import React from "react";
import Title from './Title';
import content from "../content";

function App() {
  return (
    <div id="parallax-world-of-ugg">

      <Title />

      <section>
        <div class="parallax-one">
          <h2> BOLIVIA </h2>
        </div>
      </section>

      <section>
        <div class="block">
          <p>
            <span class="first-character sc">B</span>
            {content[0].paragraph1}
          </p>
          <p class="line-break margin-top-10"></p>
          <p class="margin-top-10">
            {content[0].paragraph2}
          </p>
        </div>
      </section>

      <section>
        <div class="parallax-two">
          <h2>ECUADOR</h2>
        </div>
      </section>

      <section>
        <div class="block">
          <p>
            <span class="first-character ec">E</span>
            {content[0].paragraph1}
          </p>
          <p class="line-break margin-top-10"></p>
          <p class="margin-top-10">
            {content[0].paragraph2}
          </p>
        </div>
      </section>

      <section>
        <div class="parallax-three">
        <h2>CONTACTANOS</h2>
          <div class="container">
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
