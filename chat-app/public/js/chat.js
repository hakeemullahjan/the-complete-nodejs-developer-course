const socket = io()

socket.on("message", (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const messageText = e.target.elements.message.value

    socket.emit("sendMessage", messageText, (error) => {
        if (error) {
            return console.log(error)
        }

        console.log("Message delivered")
    })

})


document.querySelector("#send-location").addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert("Your browser doesnot suppert geolocation")
    }

    navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords)
        socket.emit("sendLocation",
            {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }, () => {
                console.log("Location shared!")
            })
    })

})