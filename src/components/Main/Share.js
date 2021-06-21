import React, { useState } from "react";

function Share(props) {
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const handleShare = (ev) => {
    ev.preventDefault();
    const url = "https://awesome-profile-cards.herokuapp.com/card";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(props.data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          setUrl(data.cardURL);

          // linkCreate.innerHTML = data.cardURL;
          // linkCreate.href = data.cardURL;
        } else {
          console.log("fallo de data");
          setError("Error");
        }
      });
  };

  return (
    <section
      className="
      collapsable-share
      js-collapsable js-collapsable-share"
    >
      <button
        onClick={handleShare}
        className="collapsable-share__button js-button-create"
      >
        <i className="far fa-address-card" aria-hidden="true"></i>
        <span className="collapsable-share__button--text">crear tarjeta</span>
      </button>
      {url !== "" ? (
        <div className="collapsable-share__twitter js-sectionCreated">
          <h3 className="collapsable-share__twitter--title">
            Tu tarjeta ha sido creada
          </h3>

          <a
            href={url}
            className="collapsable-share__twitter--link js-link-create"
            target="_blank"
          >
            Haz click aquí para ver tu tarjeta
          </a>

          <a
            target="_blank"
            className="collapsable-share__twitter--button js-twitter-button"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>Compartir en
            twitter
          </a>
        </div>
      ) : (
        ""
      )}

      {error !== "" ? (
        <div className="collapsable-share__twitter js-sectionCreatedError">
          <h3 className="collapsable-share__twitter--title">
            Completa todos los campos marcados con * :
          </h3>
          <p className="collapsable-share__twitter--link js-message-error"></p>
        </div>
      ) : null}
    </section>
  );
}

export default Share;
