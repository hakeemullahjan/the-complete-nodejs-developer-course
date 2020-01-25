const fs=require("fs")
// const book={
//     title:"The forty rules of love",
//     author:'ELIF SHAKAF'
// }
// const bookJSON=JSON.stringify(book)
// console.log(bookJSON)
// const parsedData=JSON.parse(bookJSON)
// console.log(parsedData.author)
// fs.writeFileSync("1-json.json",bookJSON)

// const dataBuffer=fs.readFileSync("1-json.json")
// const dataJSON=dataBuffer.toString()
// const data=JSON.parse(dataJSON)
// console.log(data.title)
const dataBuffer=fs.readFileSync("1-json.json")
console.log(dataBuffer)
let dataJSON=dataBuffer.toString()
console.log(dataJSON)
const data=JSON.parse(dataJSON)
console.log(data)
data.name='hakeemullah yousufzai'
data.planet='marse'
data.age=23
console.log(data)
dataJSON=JSON.stringify(data)
console.log(dataJSON)
fs.writeFileSync("1-json.json",dataJSON)