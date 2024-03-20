const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY });

const sendWelcomeEmail = (email, name) => {
    mg.messages.create('sandbox9028430aebc14845a66342bb417dece7.mailgun.org', {
        from: "Mailgun Sandbox <postmaster@sandbox9028430aebc14845a66342bb417dece7.mailgun.org>",
        to: [email],
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
};

const sendCancelationEmail = (email, name) => {
    mg.messages.create('sandbox9028430aebc14845a66342bb417dece7.mailgun.org', {
        from: "Mailgun Sandbox <postmaster@sandbox9028430aebc14845a66342bb417dece7.mailgun.org>",
        to: [email],
        subject: "Sorry to see you go!",
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};