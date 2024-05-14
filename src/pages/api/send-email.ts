import sgMail from '@sendgrid/mail';
import type {NextApiRequest, NextApiResponse} from 'next';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {name, email, message} = req.body;

  const msg = {
    to: 'rgrover00@gmail.com', 
    from: 'support@solidxit.com', 
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({message: 'Email has been sent'});
  } catch (error) {
    res.status(500).json({error: 'Error sending email'});
  }
}