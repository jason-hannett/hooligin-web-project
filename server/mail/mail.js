
const mailer = require("nodemailer");
const { Hello } = require("./Hello");
const { Thanks } = require("./Thanks");

const getEmailData = (to, template) => {
    let data = null;

    switch (template) {
        case "hello":
            data = {
                from: "Hooli Team <jason.hannett@outlook.com>",
                to,
                subject: `Welcome`,
                html: Hello()
            }
            break;

        case "thanks":
            data = {
                from: "Hooli Team <jason.hannett@outlook.com>",
                to,
                subject: `Thanks`,
                html: Thanks()
            }
            break;
        default:
            data;
    }
    return data;
}


const sendEmail = (to, type) => {

    const smtpTransport = mailer.createTransport({
        service: "Outlook",
        auth: {
            user: "jason.hannett@outlook.com",
            pass: "Madisonjade23"
        }
    })

    const mail = getEmailData(to, type)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( "email sent successfully")
        }
        smtpTransport.close();
    })


}

module.exports = { sendEmail }