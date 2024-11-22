import nodemailer from "nodemailer";

export default async (options: {
  from: string;
  subject: string;
  email: string;
  message: string;
  html?: string;
}) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: options.from,
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html: options.html,
  };

  await transporter.sendMail(mailOptions);
};
