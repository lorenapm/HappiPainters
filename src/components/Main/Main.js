import React from "react";
import Preview from "./Preview";
import Form from "./Form";

function Main() {
  return (
    <main className="main">
      <div className="card-wrapper">
        <Preview />
        <Form />
      </div>
    </main>
  );
}

export default Main;
