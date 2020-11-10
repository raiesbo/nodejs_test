const notes = require('./notes.js');
const yargs = require('yargs')
const chalk = require('chalk');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: "string"
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) {notes.addNote(argv.title, argv.body)}
})

// Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {notes.removeNotes(argv.title)}
})

// Create List command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler() {console.log('Listing out all note!')}
})

// Create Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {console.log('Reading the note!')}
})


// add, remove, read, list

//const command = process.argv[2];

// console.log(process.argv);
// console.log(yargs.argv);

yargs.parse()
