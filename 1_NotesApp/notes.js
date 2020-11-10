const { triggerAsyncId } = require("async_hooks");
const fs = require("fs");
const chalk = require('chalk');
const { listeners } = require("process");


const getNotes = () => {
    return "Your notes..."
};

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title)

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes)
        console.log(chalk.green.bold("New note added!"))
    } else {
        console.log(chalk.red.bold("Note title taken!"))
    }

    
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("./notes.json");
        const dataJSON = JSON.parse(dataBuffer);
        return dataJSON;
    } catch (e) {
        return []
    }
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)
    saveNotes(notesToKeep);
    
    if(notesToKeep.length === notes.length){
        console.log(chalk.bgRed("Sorry, no note with such title."))
    } else {
        console.log(chalk.bgGreen("Note deleted successfully."))
    }
}

/*
const removeNotes = function (title) {
    const notes = loadNotes();
    let noteIndex = "";
    notes.filter((note) => {
        if(note.title === title){
            noteIndex = notes.indexOf(note);
            return notes.indexOf(note);
        }
    })
    if (noteIndex !== "") {
        console.log(chalk.bgGreen(`"${notes[noteIndex].title}" has been removed.`))
        notes.splice(noteIndex, 1);
        saveNotes(notes)
        
    } else {
        console.log(chalk.bgRed("Sorry, no note with such title."))
    }
};
*/

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes
}