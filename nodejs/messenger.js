//create template 
function Mail(receiver, subject, message) {
    //create instance variable
    this.receiver = receiver,
        this.subject = subject,
        this.message = message,
        this.sendEmail = function () {
            console.log("Mail sent to ", this.receiver);
            console.log("Subject ", this.subject, " message ", this.message);
        }
}
module.exports.Mail = Mail;