const nodemailer = require('nodemailer');

// Function to send email
const sendEmail = async (name, email, message) => {
  // Create a transporter using SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Your SMTP host
    port: 587, // Your SMTP port
    secure: false, // Set to true if using SSL/TLS
    auth: {
      user: 'your_email@example.com', // Your email address
      pass: 'your_password' // Your email password
    }
  });

  // Email message options
  let mailOptions = {
    from: 'your_email@example.com', // Sender's email address
    to: 'admin@gmail.com', // Receiver's email address
    subject: 'New message from contact form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.messageId);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};

module.exports = sendEmail;
