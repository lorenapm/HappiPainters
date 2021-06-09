import React, { useState } from "react";
import Preview from "./Preview";
import Form from "./Form";

function Main() {
  const [palette, setPalette] = useState("1");
  const [name, setName] = useState("Nombre Apellido");
  const [job, setJob] = useState("Front-end developer");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [photo, setPhoto] = useState("");

  const handleInput = (inputName, inputValue) => {
    console.log(inputName);
    if (inputName === "palette") {
      setPalette(inputValue);
    } else if (inputName === "name") {
      setName(inputValue);
    } else if (inputName === "job") {
      setJob(inputValue);
    } else if (inputName === "email") {
      setEmail(inputValue);
    } else if (inputName === "phone") {
      setPhone(inputValue);
    } else if (inputName === "linkedin") {
      setLinkedin(inputValue);
    } else if (inputName === "github") {
      setGithub(inputValue);
    }
  };

  const handleReset = () => {
    setPalette("1");
    setName("");
    setJob("");
    setEmail("");
    setPhone("");
    setLinkedin("");
    setGithub("");
  };

  return (
    <main className="main">
      <div className="card-wrapper">
        <Preview
          palette={palette}
          name={name}
          job={job}
          email={email}
          phone={phone}
          linkedin={linkedin}
          github={github}
          handleReset={handleReset}
        />
        <Form
          handleInput={handleInput}
          palette={palette}
          name={name}
          job={job}
          email={email}
          phone={phone}
          linkedin={linkedin}
          github={github}
        />
      </div>
    </main>
  );
}

export default Main;
