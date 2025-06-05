import inquirer from "inquirer";
import boxen from "boxen";
import chalk from "chalk";
import {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius
} from './temperatura.js'

function iniciar() {

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
      message: chalk.red('Ingresa el valor a convertir: '),

    }
  ]).then(res => {
    const { tipo, grados } = res;
    let resultado = 0;
    let mensaje = '';

    if (tipo === 'Celsius a Fahrenheit') {
      if (grados < -273.15) {
        console.log(chalk.red('⚠️ No existen temperaturas por debajo del cero absoluto (-273.15ºC)'));
      } else {
        resultado = convertCelsiusToFahrenheit(grados).toFixed(1);
        mensaje = `🌡️ ${grados}ºC son ${resultado}ºF`;
        mostrarResultado(mensaje);
      }
    } else {
      if (grados < -459.67) {
        console.log(chalk.red('⚠️ No existen temperaturas por debajo del cero absoluto (-459.67ºF)'));
      } else {
        resultado = convertFahrenheitToCelsius(grados).toFixed(1);
        mensaje = `🌡️ ${grados}ºF son ${resultado}ºC`;
        mostrarResultado(mensaje);
      }
    }
    reanudar();
  });
}

function mostrarResultado(mensaje) {
  console.log(
    chalk.bgHex('#6B6863').bold(
      boxen(
        mensaje,
        { padding: 1, margin: 1, borderStyle: 'double' }
      )
    )
  );
}

function reanudar() {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'reanudar',
      message: chalk.yellow('¿Quieres hacer otra conversión?'),
      default: true,
    }
  ]).then(res => {
    if (res.reanudar) {
      iniciar();
    } else {
      console.log(chalk.green('👋 ¡Gracias por usar el conversor!'));
    }
  });
}

iniciar();