import React from "react";

function Fill() {
  return (
    <section className="collapsable-fill js-collapsable js-collapsable-fill">
      <div className="collapsable-fill__content">
        <label className="label">nombre completo *</label>
        <input
          className="input js-nameInput"
          id="name"
          type="text"
          name="name"
          placeholder="Ej: Sally Jill"
          required
        />
        <label className="label">puesto *</label>
        <input
          className="input js-job"
          id="job"
          type="text"
          name="job"
          placeholder="Ej: Front-end unicorn"
          required
        />
        <label className="label">imagen de perfil *</label>
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
        <label className="label">email *</label>
        <input
          className="input js-email"
          id="email"
          type="email"
          name="email"
          placeholder="Ej: sally-hill@gmail.com"
          required
        />
        <label className="label">teléfono *</label>
        <input
          className="input js-telephone"
          id="telephone"
          type="tel"
          name="phone"
          placeholder="Ej: 123456789"
          required
        />
        <label className="label">linkedin *</label>
        <input
          className="input js-linkedin"
          id="linkedin"
          type="text"
          name="linkedin"
          placeholder="Ej: sally.hill"
          required
        />
        <label className="label">github *</label>
        <input
          className="input js-github"
          id="github"
          type="text"
          name="github"
          placeholder="Ej: sally-hill"
          required
        />
      </div>
    </section>
  );
}

export default Fill;
