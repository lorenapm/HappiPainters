import React from "react";

function Collapsable() {
  return (
    <div className="collapsable__header js-collapsable-header">
      <i className="far fa-object-ungroup"></i>
      <h2 className="collapsable__header--title">Diseña</h2>
      <i className="fas fa-chevron-down js-arrow rotate"></i>
    </div>
  );
}

export default Collapsable;
