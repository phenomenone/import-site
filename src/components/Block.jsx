import React from 'react';

function Block(props){
    return (
        <section>
        <div className="block">
          <p>
            <span className={props.capLetterColor}>S</span>
            {props.paragraph}
          </p>
        </div>
      </section>
    );
}

export default Block;