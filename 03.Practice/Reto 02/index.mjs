import chalk from "chalk";
import inquirer from "inquirer";
import esPrimo from "./primo.js";

inquirer.prompt([
    {
        type: "number",
        name: "numero",
        message: "Ingresa un número para saber si es primo o no: "
    }
]).then( (res) => {
    const { numero } = res;

    if (esPrimo(numero)) {
      console.log(chalk.green(`${numero} SÍ es un número primo ✅`));
    } else {
      console.log(chalk.red(`${numero} NO es un número primo ❌`));
    }
});