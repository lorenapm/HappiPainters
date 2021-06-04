import React from "react";

function Preview() {
  return (
    <section className="preview">
      <div className="preview__container">
        <button type="reset" className="preview__reset js-reset">
          <span className="far fa-trash-alt"></span>
          <span>Reset</span>
        </button>
        <section className="preview__card">
          <div className="preview__card-data">
            <h2 className="preview__card-data--name js-name">
              Nombre Apellido
            </h2>
            <h3 className="preview__card-data--jobTitle js-jobTitle">
              Front-end developer
            </h3>
          </div>
          <div className="preview__card-image js__profile-image"></div>
          <div className="preview__card-socials">
            <a
              className="preview__card-socials--items js-buttonTel"
              href=""
              target="_blank"
              title="telephone"
            >
              <span className="fas fa-mobile-alt"></span>
            </a>
            <a
              className="preview__card-socials--items js-buttonEm"
              href=""
              target="_blank"
              title="email"
            >
              <span className="far fa-envelope"></span>
            </a>
            <a
              className="preview__card-socials--items js-buttonLink"
              href=""
              target="_blank"
              title="linkedin"
            >
              <span className="fab fa-linkedin-in"></span>
            </a>
            <a
              className="preview__card-socials--items js-buttonGit"
              href=""
              target="_blank"
              title="github"
            >
              <span className="fab fa-github-alt"></span>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Preview;
