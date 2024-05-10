import { Email } from '@modules/testmail/email';
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: false,
  auth: {
    user: 'chris@in.intelliconnectq.com',
    pass: 'Jb8LQ3F7WsPH',
  },
});

const emailHtml = render(<Email url="https://example.com" />);

const options = {
  from: 'chris@in.intelliconnectq.com',
  to: 'barryanil1@gmail.com',
  subject: 'hello world',
  html: emailHtml,
};

await transporter.sendMail(options);
