import { Email } from '@modules/testmail/email';
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtppro.zoho.com',
  port: 587,
  secure: false,
  auth: {
    user: 'hello@in.shoptrolly.com',
    pass: 'zhRTsrav4YMS',
  },
});

const emailHtml = render(<Email url="https://example.com" />);

const options = {
  from: 'hello@in.shoptrolly.com',
  to: 'barryanil1@gmail.com',
  subject: 'hello world',
  html: emailHtml,
};

await transporter.sendMail(options);
