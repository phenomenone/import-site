import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return (
      <div className="social-container">
        <a href="https://www.twitter.com/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faTwitter}/><span>twitter</span></a>
        <a href="https://www.facebook.com/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faFacebook}/><span>facebook</span></a>
        <a href="https://www.instagram.com/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faInstagram}/><span>Instagram</span></a>
        <a href="mailto:ventas@desdeelmundo.com"><FontAwesomeIcon icon={faEnvelope}/><span>Email</span></a>

    </div>
    );
}

export default Footer;