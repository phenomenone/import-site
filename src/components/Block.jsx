import React from 'react';

function Block(props){
    return (
        <section>
        <div className="block">
          <p>
            <span className={props.capLetterColor}>B</span>
            {props.paragraph1}
          </p>
        </div>
      </section>
    );
}

export default Block;