import React from "react";
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillMail  } from 'react-icons/ai'
import { IconContext } from "react-icons";


function Footer() {
  return (
    <div className="social-container" id="scroll-footer">
      <div className="social-item">
        <a href="https://twitter.com/Desdelmundo" target="_blank" rel="noreferrer">
        <IconContext.Provider value={{ style: { fontSize: "2.5em"  } }}>
          <AiFillTwitterCircle />
          </IconContext.Provider>
        </a>
      </div>
      <div className="social-item">
        <a href="https://www.facebook.com/profile.php?id=100086414527208" target="_blank" rel="noreferrer">
        <IconContext.Provider value={{ style: { fontSize: "2.5em"  } }}>
          <AiFillFacebook />
          </IconContext.Provider>
        </a>
      </div>
      <div className="social-item">
        <a href="https://www.instagram.com/dsdlmundo/" target="_blank" rel="noreferrer">
        <IconContext.Provider value={{ style: { fontSize: "2.5em"  } }}>
          <AiFillInstagram />
          </IconContext.Provider>
        </a>
      </div>
      <div className="social-item">
        <a href="mailto:ventas@desdeelmundo.com">
        <IconContext.Provider value={{ style: { fontSize: "2.5em"  } }}>
          <AiFillMail />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
}

export default Footer;
