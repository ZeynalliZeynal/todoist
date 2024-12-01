import nodemailer from "nodemailer";
import { email_host, email_password, email_username } from "../constants/env";

export default async (options: {
  from: string;
  subject: string;
  email: string;
  message?: string;
  html?: string;
}) => {
  const transporter = nodemailer.createTransport({
    host: email_host,
    auth: {
      user: email_username,
      pass: email_password,
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
