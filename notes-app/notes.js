const fs = require("fs")
const chalk = require("chalk")

const getNotes = () => {
    return 'Your notes....'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes=notes.filter((note) => note.title===title)
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log("Note title taken")
    }
}

const removeNote = (title, body) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.bgGreen("Note removed"))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.bgRed('No note found'))
    }
}

const listNotes = (title, body) => {
    console.log("Your notes...")
    const notes = loadNotes()
    notes.forEach(e => {
        console.log(chalk.red(e.title))
        console.log(chalk.green(e.body))
    });
}

const readNote = (title, body) => {
    const notes = loadNotes()
    const noteToFind = notes.find(note => note.title === title)
    if (!noteToFind) {
        console.log(chalk.red("No note found!"))
    } else {
        console.log(chalk.yellow(noteToFind.title))
        console.log(noteToFind.body)
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
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