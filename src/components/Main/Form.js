import React from "react";
import Collapsable from "./Collapsable";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function Form() {
  return (
    <form className="collapsable js-data" action="" method="POST">
      <Collapsable 
      title="Diseña"
      icon="far fa-object-ungroup"
      />
      <Design />
      <div className="border"></div>
      <Collapsable 
      title="Rellena"
      icon="far fa-keyboard"/>
      <Fill />
      <div className="border"></div>
      <Collapsable 
      title="Comparte"
      icon="fas fa-share-alt"/>
      <Share />

      <div className="border"></div>
    </form>
  );
}

export default Form;
