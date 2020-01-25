// const square=function(x){
//     return x*x
// }

// const square=(x)=>{
//     return x*x
// }
// const square=x=>x*x
// console.log(square(13))

const event={
    name:"Birth Party",
    guestLists:['ali','jaafar',"kazim",'baqir'],
    printGuestList(){
        console.log("Guest list for",this.name)
        this.guestLists.forEach( (guest)=>{
            console.log(guest,'is attending',this.name)
        })
    }
}
console.log(event)
event.printGuestList()