const fs = require("fs");
const chalk = require('chalk');


const readNote = (title) => {
    const notes = loadNotes();
    const selectedNote = notes.find((note) => note.title === title)
    
    if(selectedNote){
        console.log("Your selected note is: ")
        console.log("Title: ", chalk.cyan.italic.underline(selectedNote.title))
        console.log("Body: ", chalk.yellow.italic(selectedNote.body))
    } else {
        console.log(chalk.bgRed.black("There is no note with such name."))
    }
}


const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote) {
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

const listNotes = () => {
    console.log(chalk.bgGreen("Your Notes:"));
    const notes = loadNotes();
    notes.forEach((note) => console.log("- ", note.title));
}

const saveNotes = (notes) => {
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


module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}