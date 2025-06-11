/**
 * Genera un mensaje personalizado según la edad de la persona.
 *
 * @param {string} nombre - Nombre de la persona (no se utiliza en el mensaje actual).
 * @param {number} edad - Edad de la persona.
 * @returns {string} Mensaje acorde al rango de edad.
 *
 * - Si la edad es menor de 18: "Eres menor de edad"
 * - Si la edad es menor de 30: "Estas en tus mejores años"
 * - Si la edad es menor de 60: "Con experiencia y juventud"
 * - Si la edad es 60 o más: "Sabiduría acumulada"
 */

import chalk from "chalk";

export default function saludar(nombre, edad, tarea, food) {
  console.log(`Hola ${nombre}! Qué bonito nombre, vamos a revisar tus datos.`);

  let respuestaEdad = "";
  if (edad < 18) {
    respuestaEdas = chalk['green']("Eres menor de edad,tas verdecito");
  } if (edad < 30) {
    respuestaEdad = chalk['cyan']("Estas en tus mejores años");
  } if (edad < 60) {
    respuestaEdad = chalk['magenta']("Con experiencia y juventud");
  } else {
    respuestaEdad = chalk['blue']("Sabiduría acumulada");
  }

  let respuestaTarea = "";
  if(tarea === 'si'){
    respuestaTarea = "Chambeador chambeador de la más alta calidad.";
  }else{
    respuestaTarea = "No se sabe la de chambear";
  }

  return `${respuestaEdad}\n ${respuestaTarea}\n ${food}`;
  
}
