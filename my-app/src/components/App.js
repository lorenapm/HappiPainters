import "../stylesheets/App.scss";
import logo from "../images/logo-adalab.png";

function App() {
  return (
    <>
      <header className="header">
        <a href="./index.html">
          {" "}
          <div className="header__logo"></div>
        </a>
      </header>

      <main className="main">
        <div className="card-wrapper">
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

          <form className="collapsable js-data" action="" method="POST">
            <div className="collapsable__header js-collapsable-header">
              <i className="far fa-object-ungroup"></i>
              <h2 className="collapsable__header--title">Diseña</h2>
              <i className="fas fa-chevron-down js-arrow rotate"></i>
            </div>

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

            <div className="border"></div>
            <div className="collapsable__header js-collapsable-header">
              <i className="far fa-keyboard keyBoard"></i>
              <h2 className="collapsable__header--title">Rellena</h2>
              <i className="fas fa-chevron-down js-arrow "></i>
            </div>

            <section className="collapsable-fill js-collapsable js-collapsable-fill collapsable-hidden">
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

            <div className="border"></div>
            <div className="collapsable__header js-collapsable-header">
              <i className="fas fa-share-alt"></i>
              <h2 className="collapsable__header--title">Comparte</h2>
              <i className="fas fa-chevron-down js-arrow "></i>
            </div>

            <section
              className="
              collapsable-share
              js-collapsable js-collapsable-share
              collapsable-hidden
            "
            >
              <button className="collapsable-share__button js-button-create">
                <i className="far fa-address-card" aria-hidden="true"></i>
                <span className="collapsable-share__button--text">
                  crear tarjeta
                </span>
              </button>

              <div className="collapsable-share__twitter js-sectionCreated collapsable-hidden">
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
                  <i className="fab fa-twitter" aria-hidden="true"></i>Compartir
                  en twitter
                </a>
              </div>
              <div className="collapsable-share__twitter js-sectionCreatedError collapsable-hidden">
                <h3 className="collapsable-share__twitter--title">
                  Completa todos los campos marcados con * :
                </h3>
                <p className="collapsable-share__twitter--link js-message-error"></p>
              </div>
            </section>

            <div className="border"></div>
          </form>
        </div>
      </main>
      <footer className="footer">
        <small className="footer__info">
          {" "}
          Awesome profile-cards &copy; 2021
        </small>
        <img className="footer__logo" src={logo} alt="Logo Adalab" />
      </footer>
    </>
  );
}

export default App;
