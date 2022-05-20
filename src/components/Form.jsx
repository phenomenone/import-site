import React from 'react';

function Form(){
    return (
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
    );
}

export default Form;