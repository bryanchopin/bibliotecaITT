// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


import twilio from 'twilio';
// import dotenv from 'dotenv';

// dotenv.config();

// const accountSid = process.env.TWILIO_ACCOUNT_SID; 
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = twilio(accountSid, authToken);

// export default async (req, res) => {
//     const {message ,phone } = req.body;
//     const phoneWithCode = `+52${phone}`;
    
//     try {
//         await client.messages.create({
//         body: message,
//         from: process.env.TWILIO_PHONE_NUMBER,
//         to: phoneWithCode,
//         });
    
//         res.status(200).json({ message: 'Message sent successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Something went wrong' });
//     }
//     }