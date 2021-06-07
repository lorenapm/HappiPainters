import React from "react";
import Input from "./Input";

function Fill() {
  return (
    <section className="collapsable-fill js-collapsable js-collapsable-fill">
      <div className="collapsable-fill__content">
        <Input
          labelText="Nombre completo *"
          fillClass="js-nameInput"
          id="name"
          type="text"
          name="name"
          placeholder="Ej: Sally Hill"
          maxLength="19"
        />
        <Input
          labelText="Puesto *"
          fillClass="js-job"
          id="job"
          type="text"
          name="job"
          placeholder="Ej:
          Front-end unicorn"
          maxLength="22"
        />
        <label className="label"></label>
        <div className="collapsable-fill__content--buttonPreview">
          <label className="button">Añadir imagen</label>
          <input
            type="file"
            name=""
            id="img-selector"
            className="action__hiddenField js__profile-upload-btn"
            required
          />
          <div className="square js__profile-preview"></div>
        </div>
        <Input
          labelText="email *"
          fillClass="js-email"
          id="email"
          type="email"
          name="email"
          placeholder="Ej: sally-hill@gmail.com"
        />
        <Input
          labelText="Teléfono *"
          fillClass="js-telephone"
          id="telephone"
          type="tel"
          name="phone"
          placeholder="Ej: 123456789"
        />
        <Input
          labelText="Linkedin *"
          fillClass="js-linkedin"
          id="linkedin"
          type="text"
          name="linkedin"
          placeholder="Ej: sally.hill"
        />

        <Input
          labelText="Github *"
          fillClass="js-github"
          id="github"
          type="text"
          name="github"
          placeholder="Ej: sally-hill"
        />
      </div>
    </section>
  );
}

export default Fill;
