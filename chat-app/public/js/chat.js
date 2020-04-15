const socket = io()

// Elements
const $messageForm = document.querySelector("#message-form")
const $messageFormInput = $messageForm.querySelector("input")
const $messageFormButton = $messageForm.querySelector("button")
const $sendLocationButton = document.querySelector('#send-location')
const $messages = document.querySelector("#messages")

// Templates
const messageTemplate = document.querySelector("#message-template").innerHTML

socket.on("message", (message) => {
    console.log(message)
    const html = Mustache.render(messageTemplate, {
        message
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    $messageFormButton.setAttribute("disabled", 'disabled')

    //disabled
    const messageText = e.target.elements.message.value

    socket.emit("sendMessage", messageText, (error) => {
        $messageFormButton.removeAttribute("disabled")
        $messageFormInput.value = ''
        $messageFormInput.focus()

        //enabled
        if (error) {
            return console.log(error)
        }

        console.log("Message delivered")
    })

})


$sendLocationButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert("Your browser doesnot suppert geolocation")
    }

    //disabled
    $sendLocationButton.setAttribute("disabled", 'disabled')

    navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords)
        socket.emit("sendLocation",
            {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }, () => {
                $sendLocationButton.removeAttribute("disabled")
                //enabled
                console.log("Location shared!")
            })
    })

})