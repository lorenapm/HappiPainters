import React from "react";
import Collapsable from "./Collapsable";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function Form() {
  return (
    <form className="collapsable js-data" action="" method="POST">
      <Collapsable />
      <Design />
      <div className="border"></div>
      <Collapsable />
      <Fill />
      <div className="border"></div>
      <Collapsable />
      <Share />

      <div className="border"></div>
    </form>
  );
}

export default Form;
