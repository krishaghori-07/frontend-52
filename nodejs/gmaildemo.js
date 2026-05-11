const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'karan.bhatt.bhavnagar@gmail.com',        // Your Gmail address (Sender)
    pass: 'ezbs oglv nwot thnb'            // ← IMPORTANT: Use App Password (see below)
  }
});

// Email options
const mailOptions = {
  from: '"My App" <karan.bhatt.bhavnagar@gmail.com>',   // Sender name + email
  to: 'theeasylearn@gmail.com',               // Receiver email
  subject: 'Hello from Nodemailer! 🚀',
  text: 'This is a plain text email sent using Nodemailer and Gmail.',
  html: '<h2>Hello!</h2><p>This is an <b>HTML</b> email sent with Nodemailer.</p>'
};

// Send email
async function sendEmail() {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
}

sendEmail();