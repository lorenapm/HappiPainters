const express = require("express");
const cors = require("cors");
const userData = require('./data/data.json');

const server = express();

server.use(cors());
server.use(express.json({ limit: '10Mb' }));
// set template engine middlewares
server.set('view engine', 'ejs');

const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//static server
const serverStaticPath = './public';
server.use(express.static(serverStaticPath));

server.get("/card/:id", (req, res) => {
  const userId = req.params.id;
  
  if(userData){  
    const data = {};
    data.palette = userData.palette;
    data.name = userData.name;
    data.job = userData.job;
    data.email = userData.email;
    data.phone = userData.phone;
    data.linkedin = userData.linkedin;
    data.github = userData.github;
    data.photo = userData.photo;
    res.render('pages/card', data);
    
  }else {
    res.render('pages/card-not-found'); 
  }
});

server.post("/card", (req, res) => {
  const response = {};
  // Recoger los datos desde React
  if (req.body.name === "") {
    response.success = false;
    response.error = "No olvides rellenar el campo Nombre";
  } else if (req.body.job === "") {
    response.success = false;
    response.error = "No olvides rellenar el campo Puesto";
  } else if (req.body.photo === "") {
    response.success = false;
    response.error = "No olvides subir tu foto de perfil";
  } else if (req.body.email === "") {
    response.success = false;
    response.error = "No olvides rellenar el campo Email";
  } else if (req.body.phone === "") {
    response.success = false;
    response.error = "No olvides rellenar el campo Teléfono";
  } else if (req.body.linkedin === "") {
    response.success = false;
    response.error = "No olvides rellenar el campo Linkedin";
  } else if (req.body.github === "") {
    response.success = false;
    response.error = "No olvides rellenar el campo Github";
  } else {
    // Falta bbdd que nos devolvera cardID
    response.success = true;
    response.cardURL =
      "https://awesome-profile-cards.herokuapp.com/card/${cardId}";
  }
  res.json({ response });

});

server.get("*", (req, res) => {
  const notFoundFileRelativePath = "../web/404-not-found.html";
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
