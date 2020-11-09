const validator = require('validator');
const getNotes = require('./notes.js');
const chalk = require('chalk');

const msg = getNotes();


//console.log(msg);

console.log(chalk.bgGreen("Success!"), chalk.green("Success!"), chalk.green.bold("Success!"))