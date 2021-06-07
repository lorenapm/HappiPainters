import React from "react";

function Input(props) {
  return (
    <>
      <label for={props.id} className="label">
        {props.labelText}
      </label>
      <input
        className={`input ${props.fillClass}`}
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        maxlength={props.maxLength}
        required
      />
    </>
  );
}

export default Input;
