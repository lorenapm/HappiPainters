import React, { useState } from "react";

function Palette(props) {
  return (
    <label
      for={props.id}
      className={`palette palette-radio ${props.labelClass}`}
    >
      <input
        type="radio"
        className="radio-className js-paletteDefault"
        name="palette"
        id={props.id}
        value={props.value}
      />
      <ul className={`palette__square palette-1 ${props.paletteClass}`}>
        <li className="palette__square--color color-1"></li>
        <li className="palette__square--color color-2"></li>
        <li className="palette__square--color color-3"></li>
      </ul>
    </label>
  );
}

export default Palette;
