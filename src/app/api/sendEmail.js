import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: '', // Replace with your email
          pass: '', // Replace with your email password or app-specific password
        },
      });

      const mailOptions = {
        from: email,
        to: 'rabiasohail1209@gmail.com',
        subject: `New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email. Try again later.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
