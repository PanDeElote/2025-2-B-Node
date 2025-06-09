import inquirer from 'inquirer';
import chalk from 'chalk';
import saludar from './saludo.js';
import figlet from 'figlet';

inquirer.prompt([ //Le pide al usuario que ingrese los datos. INQUIRER
  {
    type: 'input', //Tipo de interacción
    name: 'nombre', //Cómo se llama la cajita donde se va a guardar la info
    message: '¿Cuál es tu nombre?' //El mensaje que le sale en consola al usuario
  },
  {
    type: 'input',
    name: 'edad',
    validate: function (value) {
    const parsed = parseInt(value, 10); //el 10 significa que es del sistema decimal
    if (isNaN(parsed) || parsed < 0) {
      return 'Por favor, ingresa un número entero válido.';
    }else if(parsed > 150){
      return 'No creo que seas Matusalen, ingresa una edad válida.'
    }else{
      return true;
    }
    },
    message: '¿Cuál es tu edad?'
  },
  {
    type: 'list',
    name: 'color',
    message: '¿Cuál es tu color favorito?',
    choices: ['red', 'blue', 'yellow', 'green', 'cyan']
  },
  {
    type: 'select',
    name: 'tarea',
    message: 'hiciste la tarea de programación? ',
    choices: ['si', 'no']
  },
  {
    type: 'checkbox',
    name: 'food',
    message: 'Cuáles de las siguientes comidas te gustan? ',
    choices: ['pizza', 'tacos', 'jicama', 'chapulines']
  }
]).then(answers => { //Todo lo anterior se va a guardar dentro de ANSWERS, y vas a interactuar con tal como array
  let msjToShow = saludar(answers.nombre, answers.edad, answers.color, answers.tarea, answers.food); //Simplificando el nombre de la funcion que importé (SALUDAR)

  figlet(answers.nombre, function (err, data) { //Figlet para tipografía chida. DATA en este caso es nuestro answers.nombre
    if (err) {
      console.log("Algo salió mal...");
      return;
    }
    console.log(chalk[answers.color](data)); //Si nada sale mal, primero aplicas el chalk. Anatomía: chalk[color a utilizar](en dónde se va a aplicar)
  });

  console.log(chalk[answers.color](msjToShow)); //Ahora sí mostrando en consola mi función SALUDAR
});