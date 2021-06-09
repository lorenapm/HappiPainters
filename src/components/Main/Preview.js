import React from "react";
import Reset from "./Reset";

function Preview(props) {
  return (
    <section className="preview">
      <div className="preview__container">
        <Reset />

        <section
          className={`preview__card palcol${props.palette} pal${props.palette}`}
        >
          <div className="preview__card-data">
            <h2 className="preview__card-data--name js-name">{props.name}</h2>
            <h3 className="preview__card-data--jobTitle js-jobTitle">
              {props.job}
            </h3>
          </div>
          <div className="preview__card-image js__profile-image"></div>
          <div className="preview__card-socials">
            <a
              className="preview__card-socials--items js-buttonTel"
              href={`tel:${props.phone}`}
              target="_blank"
              title="telephone"
            >
              <span className="fas fa-mobile-alt"></span>
            </a>
            <a
              className="preview__card-socials--items js-buttonEm"
              href={`mailto:${props.email}`}
              target="_blank"
              title="email"
            >
              <span className="far fa-envelope"></span>
            </a>
            <a
              className="preview__card-socials--items js-buttonLink"
              href={`https://www.linkedin.com/in/${props.linkedin}`}
              target="_blank"
              title="linkedin"
            >
              <span className="fab fa-linkedin-in"></span>
            </a>
            <a
              className="preview__card-socials--items js-buttonGit"
              href={`https://github.com/${props.github}`}
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
