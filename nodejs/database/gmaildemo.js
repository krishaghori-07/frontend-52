import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'karan.bhatt.bhavnagar@gmail.com',
    pass: 'ezbs oglv nwot thnb'
  }
});

export default async function sendEmail(receiver, subject, message) {
  try {
    const mailOptions = {
      from: '"My App" <karan.bhatt.bhavnagar@gmail.com>',
      to: receiver,
      subject: subject,
      text: 'This is a plain text email sent using Nodemailer and Gmail.',
      html: message
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully to', receiver);
    return info;
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error;
  }
}