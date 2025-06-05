import inquirer from "inquirer";
import boxen from "boxen";
import chalk from "chalk";
import {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius
} from './temperatura.js'

inquirer.prompt([
  {
    type: 'list',
    name: 'tipo',
    message: chalk.red('¿Qué tipo de conversión quieres hacer?'),
    choices: ['Celsius a Fahrenheit', 'Fahrenheit a Celsius']
  },
  {
    type: 'number',
    name: 'grados',
    message: chalk.red('Ingresa el valor a convertir: ')
  }
]).then(res => {
  const { tipo, grados } = res;
  let resultado = 0;
  let mensaje = '';

  if (tipo === 'Celsius a Fahrenheit') {
    resultado = convertCelsiusToFahrenheit(grados).toFixed(1);
    mensaje = `🌡️ ${grados}ºC son ${resultado}ºF`;
  } else {
    resultado = convertFahrenheitToCelsius(grados).toFixed(1);
    mensaje = `🌡️ ${grados}ºF son ${resultado}ºC`;
  }

  console.log(
    chalk.bgHex('#6B6863').bold(
      boxen(
        mensaje,
        { padding: 1, margin: 1, borderStyle: 'double' }
      )
    )
  );
});