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
  const abc = ["a", "b", "c", "d", "e", "f", "g", "1", "2", "3", "4", "5", "6"]; //Es lo mismo un arreglo con comas que un string = 'ABCDEFGHI3456789' y sigue sirviendo .lenght
  const limiteCaracteres = 6;
  let password = "";
  for (let i = 0; i < limiteCaracteres; i++) {
    console.log("En el for");
    let random = Math.floor(Math.random() * 13);
    password = password + abc[random];
  }
  console.log(password);

  res.send(password);
});

app.listen(port, () => {
  console.log("Servidor iniciado");
});

function codificar(mensaje){
  const reemplazos = {
    "a": "4";
    "e": "3";
    "i": "1";
    "o": "0";
    "u": "_";
  };

  const invertido = mensaje.split("").reverse().join(""); //SPLIT(te lo vuelve un array SOLO TRABAJA CON STRING), REVERSE(voltea UN ARRAY) y JOIN(Convierte el array a UN STRING) 

  const convertido = 
    invertido
      .replace(/[aeiou]/gi,
        letra => reemplazos[letra.toLowerCase()] || letra);

    
}