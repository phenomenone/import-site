import React from "react";
import Form from "./Form";
import Footer from "./Footer";
import Title from "./Title";

function Paralax(props) {
  return (
    <section>
      <div className={props.paralax}>
        <h2> {props.country} </h2>
        {!props.country ? <Title /> : null}
        {props.form ? <Form /> : null}
        {props.form ? <Footer /> : null}
      </div>
    </section>
  );
}

export default Paralax;
