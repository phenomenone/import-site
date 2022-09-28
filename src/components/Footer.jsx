import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="social-container" id="scroll-footer">
      <div className="social-item">
        <a href="https://twitter.com/Desdelmundo" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className="social-item">
        <a href="https://www.facebook.com/profile.php?id=100086414527208" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <div className="social-item">
        <a href="https://www.instagram.com/dsdlmundo/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="social-item">
        <a href="mailto:ventas@desdeelmundo.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
