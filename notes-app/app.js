// // const fs=require("fs")
// // // fs.writeFileSync("notes.txt","Hello this is Hakeemullah Jan Yousufzai!")
// // fs.appendFileSync("notes.txt"," I am appending file")
// // require("./utils")
// // const name="hakeemullah"
// // console.log(name)
// // const name=require("./utils")
// // console.log(name)
// // const add=require('./utils')
// // const sum=add(14,-2)
// // console.log(sum)
// const getNotes=require("./notes")
// console.log(getNotes())
// const validator=require("validator")
// console.log(validator.isEmail("hakeemullahgmail.com"))
// console.log(validator.isURL("hakeemullahgmail"))
// const chalk=require("chalk")
// console.log(chalk.blue("HAKEEMULLAH"))
// console.log(chalk.red("YOUSUFZAI"))
// console.log(chalk.yellow.bgWhite("Success"))
// console.log(chalk.yellow.bold("Success"))
// console.log(process.argv[2])
// const command=process.argv[2]
// console.log(process.argv)
// if(command==='add'){
//     console.log("Adding...")
// }else if(command==='remove'){
//     console.log("Removing...")
// }

const notes=require("./notes")

const yargs=require("yargs")
yargs.version("1.2.0")
//add, remove , read , list
//adding command
yargs.command({
    command:"add",
    describe:"Add a new note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"THIS IS MY BODY",
            demandOption:true,
            type:String,
        }
    },
    handler:function (argv){
        notes.addNote(argv.title,argv.body)
    }
})

//remove commands
yargs.command({
    command:"remove",
    describe:"Remove a note",
    builder:{
        title:{
            describe:"Remove the title",
            demandOption:true,
            type:String
        },
        body:{
            describe:"THIS IS REMOVE BODY",
            demandOption:true,
            type:String
        }
    },
    handler:function (argv){
       notes.removeNote(argv.title,argv.body)
    }
})

//list command
yargs.command({
    command:"list",
    describe:"List a note",
    handler:function (){
        console.log("Listing the notes")
    }
})
//read command
yargs.command({
    command:'read',
    describe:"Read a note",
    handler:function (){
        console.log('Reading the notes')
    }
})
// console.log(yargs.argv)
yargs.parse()

