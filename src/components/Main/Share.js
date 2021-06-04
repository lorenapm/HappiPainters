import React from "react";

function Share() {
  return (
    <section
      className="
      collapsable-share
      js-collapsable js-collapsable-share"
    >
      <button className="collapsable-share__button js-button-create">
        <i className="far fa-address-card" aria-hidden="true"></i>
        <span className="collapsable-share__button--text">crear tarjeta</span>
      </button>

      <div className="collapsable-share__twitter js-sectionCreated">
        <h3 className="collapsable-share__twitter--title">
          Tu tarjeta ha sido creada
        </h3>
        <p className="message-share">
          Haz click en el enlace para ver tu tarjeta:
        </p>
        <a
          className="collapsable-share__twitter--link js-link-create"
          target="_blank"
          href=""
        ></a>
        <a
          href=""
          target="_blank"
          className="collapsable-share__twitter--button js-twitter-button"
        >
          <i className="fab fa-twitter" aria-hidden="true"></i>Compartir en
          twitter
        </a>
      </div>
      <div className="collapsable-share__twitter js-sectionCreatedError">
        <h3 className="collapsable-share__twitter--title">
          Completa todos los campos marcados con * :
        </h3>
        <p className="collapsable-share__twitter--link js-message-error"></p>
      </div>
    </section>
  );
}

export default Share;
