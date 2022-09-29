import React from 'react';

function Block(props){
    return (
        <section>
        <div className="block">
          <p>
            {/* <span className={props.capLetterColor}>S</span> */}
            {/* {props.paragraph} */}

            <div id="rotate-words"> 
              <div>Somos una empresa dedicada a la importacion de productos de alta calidad.<br />  </div>
              <div>Somos una empresa dedicada a la importacion de productos de alta calidad.<br />  </div>
              <div>Somos una empresa dedicada a la importacion de productos de alta calidad.<br />  </div>
            </div>

          </p>
        </div>
      </section>
    );
}

export default Block;