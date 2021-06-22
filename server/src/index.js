const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());

const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.post("/card", (req, res) => {
  // Recoger los datos desde React
  console.log(req.body);
  if (
    req.body.palette === "" ||
    req.body.name === "" ||
    req.body.job === "" ||
    req.body.email === "" ||
    req.body.phone === "" ||
    req.body.photo === "" ||
    req.body.linkedin === "" ||
    req.body.github === ""
  ) {
    const response = {
      success: false,
      error: "Inténtalo más tarde :) !",
    };
    res.json(response);
  } else {
    // Falta bbdd que nos devolvera cardID

    const response = {
      success: true,
      cardURL: "https://awesome-profile-cards.herokuapp.com/card/${cardId}",
    };
    res.json(response);
  }

  /*
  
  */
});
