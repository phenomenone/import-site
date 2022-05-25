import React from "react";
import Form from "./Form";
import Footer from "./Footer";

function Paralax(props) {
  return (
    <section>
      <div className={props.paralax}>
        <h2> {props.country} </h2>
        {props.form ? <Form /> : null}
        {props.form ? <Footer /> : null}
      </div>
    </section>
  );
}

export default Paralax;
