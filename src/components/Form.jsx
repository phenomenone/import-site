import React, { useState } from "react";


function Form() {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fMessage, setFMessage] = useState('');



  console.log(process.env.REACT_APP_MAILCHIMP_URL);
  console.log(process.env.REACT_APP_MAILCHIMP_U);
  console.log(process.env.REACT_APP_MAILCHIMP_ID);
  
  return (
    <div className="container">
      <form className="contact-form" action={process.env.REACT_APP_MAILCHIMP_URL} method="POST" noValidate>
        <input type="hidden" name="u" value={process.env.REACT_APP_MAILCHIMP_U}/>
        <input type="hidden" name="id" value={process.env.REACT_APP_MAILCHIMP_ID}/>
          <label htmlFor='MERGE0'>
                    {/* Email */}
                    <input 
                        type="email" 
                        name="EMAIL" 
                        id="MERGE0"
                        value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}}
                        autoCapitalize="off" 
                        autoCorrect="off"
                        placeholder="Correo electrónico"
                     /> 
                </label>
                <label htmlFor='MERGE1'>
                    {/* First name */}
                    <input 
                        type="text" 
                        name="FNAME" 
                        id="MERGE1" 
                        value={firstName} 
                        onChange={(e)=>{setFirstName(e.target.value)}}
                        placeholder="Nombre(s) ..."
                    />
                </label>
                <label htmlFor='MERGE2'>
                    {/* Last name */}
                    <input 
                        type="text" 
                        name="LNAME" 
                        id="MERGE2" 
                        value={lastName} 
                        onChange={(e)=>{setLastName(e.target.value)}}
                        placeholder="Apellido(s) ..."
                    />
                </label>
                <label htmlFor='MERGE3'>
                    {/* Message */}
                    <textarea 
                        type="text" 
                        name="MESSAGE" 
                        id="MERGE3" 
                        value={fMessage} 
                        onChange={(e)=>{setFMessage(e.target.value)}}
                        style={{ height: "200px" }}
                        placeholder="Escriba su mensaje aca. Recuerde enviar su informacion de contacto ..."
                    ></textarea>
                </label>

        <input type="submit" value="Enviar"/>
      </form>
    </div>
  );
}

export default Form;
