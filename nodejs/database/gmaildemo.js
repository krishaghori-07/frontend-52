const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'karan.bhatt.bhavnagar@gmail.com',        // Your Gmail address (Sender)
    pass: 'ezbs oglv nwot thnb'            // ← IMPORTANT: Use App Password (see below)
  }
});



// Send email
export async function sendEmail(receiver, subject, message) {
  try {
    // Email options
    const mailOptions = {
      from: '"My App" <karan.bhatt.bhavnagar@gmail.com>',   // Sender name + email
      to: receiver,               // Receiver email
      subject: subject,
      text: 'This is a plain text email sent using Nodemailer and Gmail.',
      html: message
    };
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    //console.log('Message ID:', info.messageId);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
}
