const nodemailer = require("nodemailer");

exports.handler = async (req, res) => {
  const { name, email, message } = req.body;

  // Configure transport
  const transporter = nodemailer.createTransport({
    service: "gmail", // or your email provider
    auth: {
      user: "your_email@gmail.com",
      pass: "your_email_password_or_app_password",
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "rabiasohail1209@gmail.com",
      subject: "Feedback from Tech Blog",
      text: message,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
