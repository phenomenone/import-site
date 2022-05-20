import React from 'react';

function Block(props){
    return (
        <section>
        <div className="block">
          <p>
            <span className={props.capLetterColor}>B</span>
            {props.paragraph1}
          </p>
          <p className="line-break margin-top-10"></p>
          <p className="margin-top-10">
            {props.paragraph2}
          </p>
        </div>
      </section>
    );
}

export default Block;