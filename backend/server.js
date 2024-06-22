import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use(cors()); 

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post("/api/mail", (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, 
      subject: `Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nFrom: ${email}` 
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        res.status(500).json({ success: false, error: 'Failed to send email' });
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ success: true, message: 'Email sent successfully' });
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}!`);
});