//✅ Práctica en clase: Convertir grados Celsius a Fahrenheit usando boxen
//🎯 Objetivo
//Crear un módulo reutilizable (temperatura.js) que convierta grados.
//
//Usar inquirer para entrada de usuario.
//
//Mostrar el resultado con estilo usando boxen.

export function convertCelsiusToFahrenheit(tempeture) {
  let gF = 0;
  //TODO convertir ºC a ºF
  gF = (tempeture * 9 / 5) + 32
  return gF
}

export function convertFahrenheitToCelsius(tempeture) {
  let gC = 0;
  //TODO convertir ºF a ºC
  gC = (tempeture - 32) * 5 / 9
  return gC
}

//module.exports = {
//convertCelsiusToFahrenheit,
//convertFahrenheitToCelsius
//};