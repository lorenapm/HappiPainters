import "../stylesheets/App.scss";
import logo from "../images/logo-adalab.png";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <>
      <Header />
      <Main />

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
