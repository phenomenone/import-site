import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return (
      <div className="social-container">
        <a href="#"><FontAwesomeIcon icon={faTwitter}/><span>twitter</span></a>
        <a href="#"><FontAwesomeIcon icon={faFacebook}/><span>facebook</span></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram}/><span>Instagram</span></a>
        <a href="#"><FontAwesomeIcon icon={faEnvelope}/><span>Email</span></a>

    </div>
    );
}

export default Footer;