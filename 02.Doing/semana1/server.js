const express = require('express');
const { program } = require("commander");
const crypto = require("crypto");

const app = express();

let port = 0;
const portDev = 3000;
const portQA = 3001;
const portProduction = 3002;

program.option("--dev", "Modo desarrollo");
program.option("--qa", "Modo QA");
program.option("--production", "Modo Production");
program.option("--generate-password <length>", "Genera una contraseña", parseInt);

program.parse(process.argv);
const options = program.opts();
const args = process.argv;

if (options.dev) { port = portDev }
else if (options.qa) { port = portQA }
else if (options.production) { port = portProduction }

// Invertir el orden de las letras.
// Reemplazar vocales por números:
// a → 4
// e → 3
// i → 1
// o → 0
// u → _
// Añadir 2 caracteres especiales aleatorios al final.
function codificar(mensaje) {
  const reemplazos = {
    "a": "4",
    "e": "3",
    "i": "1",
    "o": "0",
    "u": "_",
  };

  const invertido = mensaje.split("").reverse().join("");
  const convertido =
    invertido
      .replace(/[aeiou]/gi,
        letra => reemplazos[letra.toLowerCase()] || letra);
  const caracteresExtra = "!@#%^&*";
  const extra1 = caracteresExtra[Math.floor(Math.random() * caracteresExtra.length)];
  const extra2 = caracteresExtra[Math.floor(Math.random() * caracteresExtra.length)];
  return convertido + extra1 + extra2;
}

function generatePassword() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  const limiteCarecteres = 6;

  let password = "";
  for (let i = 0; i < limiteCarecteres; i++) {
    let random = Math.floor(Math.random() * caracteres.length);
    password = password + caracteres[random];
  }
  return password;
}


app.get("/", (req, res) => {
  res.send("HOLA!");
});

app.get("/home", (req, res) => {
  res.send("HOLA desde el home!");
});

app.get("/password", (req, res) => {
  res.send(generatePassword());
});

app.get("/generatePassword", (req, res) => {
  const length = options.generatePassword;
  const password = crypto.randomBytes(length).toString('hex').slice(0, length);
  console.log("Generate password", password);

  res.send(password);
});

// http://localhost:3000/enigma?mensaje= hola
app.get("/enigma", (req, res) => {
  console.log(req.query);
  res.send(codificar(req.query.mensaje));
});

app.listen(port, () => {
  console.log("Servidor iniciado");
  console.log("Argumentos de la linea de comandos");
  console.log(args);
});