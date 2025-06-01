const express = require('express');
const app = express();

let port = 3000;

app.get("/", (req, res) => {
  res.send("HOLA!");
});

app.get("/home", (req, res) => {
  res.send("HOLA desde el home!");
});

app.get("/password", (req, res) => {
  const abc = ["a", "b", "c", "d", "e", "f", "g", "1", "2", "3", "4", "5", "6"];
  const limiteCaracteres = 6;

  console.log("Antes del for");
  let password = "";
  for (let i = 0; i < limiteCaracteres; i++) {
    console.log("En el for");
    let random = Math.floor(Math.random() * 14);
    password = password + abc[random];
  }
  console.log("Afuera del for");
  console.log(password);

  res.send(password);
});

app.listen(port, () => {
  console.log("Servidor iniciado");
});