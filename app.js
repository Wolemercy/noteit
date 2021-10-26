const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')


// Create add command

yargs.command({
    command: "add",
    describe: "Add a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }   
    },
    handler: (argv) => {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// Create remove command

yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: () => {
        console.log("Removing the note")
    }
})

// Create add command

yargs.command({
    command: "list",
    describe: "List all notes",
    handler: () => {
        console.log("Listing all notes")
    }
})

// Create add command

yargs.command({
    command: "read",
    describe: "Read a note",
    handler: () => {
        console.log("Reading the note")
    }
})

// Create list command
yargs.parse()
 