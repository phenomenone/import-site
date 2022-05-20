import React from "react";

// import Header from './Header';

function App() {
  return (
    <div id="parallax-world-of-ugg">
      <section>
        <div class="title">
          <h3>Desde el</h3>
          <h1>MUNDO</h1>
        </div>
      </section>

      <section>
        <div class="parallax-one">
          <h2> BOLIVIA </h2>
        </div>
      </section>

      <section>
        <div class="block">
          <p>
            <span class="first-character sc">B</span>orem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p class="line-break margin-top-10"></p>
          <p class="margin-top-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
            <span class="first-character ec">E</span>orem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p class="line-break margin-top-10"></p>
          <p class="margin-top-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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

              {/* <label for="country">Country</label> 
              <select id="country" name="country">
                <option value=""> -- Elegir Pais -- </option>
                <option value="australia">Argentina</option>
                <option value="australia">Bolivia</option>
                <option value="australia">Canada</option>
                <option value="canada">China</option>
                <option value="australia">Ecuador</option>
                <option value="australia">Peru</option>
                <option value="usa">USA</option>
              </select>*/}


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
