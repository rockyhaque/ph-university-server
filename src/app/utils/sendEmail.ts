import nodemailer from 'nodemailer';
// import config from '../config';

export const sendEmail = async (to: string, resetLink: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    // secure: config.NODE_ENV === 'production',
    secure: true,
    auth: {
      user: 'rockyhaque99@gmail.com',
      pass: 'mbkd liov pnyh ugyb',
    },
  });

  const htmlTemplate = `
  <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">🔐 Reset Your Password</h1>
        </div>
        <div style="padding: 20px;">
          <p>Hi 👋,</p>
          <p>We received a request to reset your password. No worries, we’ve got you covered! Please use the link below to reset your password. This link will expire in <b>10 minutes</b> for security reasons.</p>
          <a href="${resetLink}" 
             style="display: inline-block; background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 20px; font-size: 16px;">Reset Password</a>
          <p style="margin-top: 20px;">If you didn’t request a password reset, please ignore this email or contact support if you have any concerns.</p>
          <p>Stay safe! <br>🚀 The Team at RockyHaque</p>
        </div>
        <div style="background-color: #f9f9f9; color: #777; text-align: center; padding: 10px; font-size: 12px;">
          <p style="margin: 0;">📧 Need help? Contact us at <a href="mailto:rockyhaque99@gmail.com" style="color: #4CAF50;">rockyhaque99@gmail.com</a></p>
        </div>
      </div>
    </body>
  </html>
`;

  // send mail with defined transport object
  await transporter.sendMail({
    from: 'rockyhaque99@gmail.com',
    // to: 'rockyhaque27@gmail.com',
    to,
    subject: 'Reset Your Password within 10 min',
    text: '', // plain text body
    html: htmlTemplate, // html body
  });
};
