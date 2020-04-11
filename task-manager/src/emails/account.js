const sgMail = require('@sendgrid/mail')
const nodemailer = require("nodemailer");

sgMail.setApiKey(process.env.SENDGRIG_API_KEY)

// sgMail.send({
//     to: 'h.jan210@gmail.com',
//     from: 'andrew@mead.io',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually get to you.'
// })

// const sendWelcomeEmail = (email, name) => {
//     sgMail.send({
//         to: email,
//         from: 'andrew@mead.io',
//         subject: "Thanks for joining in",
//         text: `Welcome to the app ${name}. Let me know how you get along with the app.`
//     })
// }

// const sendCancelationEmail = (email, name) => {
//     sgMail.send({
//         to: email,
//         from: 'andrew@mead.io',
//         subject: "Sorry to see you",
//         text: `Goodbye ${name}. I hope to see you back sometime soon..`
//     })
// }

// create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: '', // generated ethereal user
//         pass: '' // generated ethereal password
//     }
// });

// send mail with defined transport object
// transporter.sendMail({
//     from: 'h.jan210@gmail.com', // sender address
//     to: "h.jan210@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>" // html body
// });

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
});

// transporter.sendMail(mailOptions, function (err, info) {
//     if (err)
//         console.log(err)
//     else
//         console.log(info);
// });

const sendWelcomeEmail = (email, name) => {
    transporter.sendMail({
        to: email,
        from: process.env.USER,
        subject: "Thanks for joining in",
        text: `Welcome to the app ${name}. Let me know how you get along with the app.`
    }, function (err, info) {
        if (err) {
            // console.log(err)
        }
        else {
            // console.log(info);
        }
    });

}

const sendCancelationEmail = (email, name) => {
    transporter.sendMail({
        to: email,
        from: process.env.USER,
        subject: "Sorry to see you",
        text: `Goodbye ${name}. I hope to see you back sometime soon..`
    }, function (err, info) {
        if (err) {
            // console.log(err)
        }
        else {
            // console.log(info);
        }
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}