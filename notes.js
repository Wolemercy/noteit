const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "These are my notes"
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New note added")
    } else {
        console.log("Note title taken!")
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const newNotes = notes.filter((note) => note.title !== title)

    if (newNotes.length === notes.length) {
        console.log(chalk.green("No note found!"))
    } else {
        saveNotes(newNotes)
        console.log(chalk.red("Note removed"))
    }

}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.greenBright("Your Notes"));
    notes.forEach(element => {
        console.log(chalk.blue(element.title)) 
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.greenBright(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.redBright("Note not found"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}