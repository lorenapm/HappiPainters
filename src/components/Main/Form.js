import React from "react";
import Collapsable from "./Collapsable";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function Form(props) {
  return (
    <form className="collapsable js-data" action="" method="POST">
      <Collapsable
        title="Diseña"
        icon="far fa-object-ungroup"
        handleInput={props.handleInput}
      >
        <Design handleInput={props.handleInput} palette={props.palette} />
      </Collapsable>
      <div className="border"></div>
      <Collapsable
        title="Rellena"
        icon="far fa-keyboard"
        handleInput={props.handleInput}
      >
        <Fill
          handleInput={props.handleInput}
          name={props.name}
          job={props.job}
          email={props.email}
          phone={props.phone}
          linkedin={props.linkedin}
          github={props.github}
        />
      </Collapsable>
      <div className="border"></div>
      <Collapsable
        title="Comparte"
        icon="fas fa-share-alt"
        handleInput={props.handleInput}
      >
        <Share />
      </Collapsable>
      <div className="border"></div>
    </form>
  );
}

export default Form;
