import React from "react";

function Design() {
  return (
    <section className="collapsable-design js-collapsable js-collapsable-design">
      <div className="collapsable-design__colors">
        <h3 className="collapsable-design__colors--title">colores</h3>
        <div clas="collapsable-design__colors--palettes">
          <label className="palette palette-radio label1">
            <input
              type="radio"
              className="radio-className js-paletteDefault"
              name="palette"
              id="palette1"
            />
            <ul className="palette__square palette-1">
              <li className="palette__square--color color-1"></li>
              <li className="palette__square--color color-2"></li>
              <li className="palette__square--color color-3"></li>
            </ul>
          </label>

          <label className="palette palette-radio label2">
            <input
              type="radio"
              className="radio-className"
              name="palette"
              id="palette2"
            />
            <ul className="palette__square palette-2">
              <li className="palette__square--color color-1"></li>
              <li className="palette__square--color color-2"></li>
              <li className="palette__square--color color-3"></li>
            </ul>
          </label>

          <label className="palette palette-radio label3">
            <input
              type="radio"
              className="radio-className"
              name="palette"
              id="palette3"
            />
            <ul className="palette__square palette-3">
              <li className="palette__square--color color-1"></li>
              <li className="palette__square--color color-2"></li>
              <li className="palette__square--color color-3"></li>
            </ul>
          </label>
        </div>
      </div>
    </section>
  );
}

export default Design;
