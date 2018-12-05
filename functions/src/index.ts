import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';

// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});
const APP_NAME = 'LearnScilla';

// Sends a welcome email to new user.
export const sendWelcomeEmail = functions.auth.user().onCreate(async (user) => {
  const { email, displayName } = user;

  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email,
    subject: `Welcome to ${APP_NAME}`,
    text: `Hey ${displayName || ''}, Welcome to ${APP_NAME}. I hope you will enjoy our service.`
  };

  await mailTransport.sendMail(mailOptions);
  console.log('New welcome email sent to:', email);
});

// Sends an account deleted email confirmation to users who delete their accounts.
export const sendByeEmail = functions.auth.user().onDelete(async (user) => {
  const { email, displayName } = user;

  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email,
    subject: 'Goodbye',
    text: `Hey ${displayName || ''}, We confirm that we have deleted your ${APP_NAME} account.`
  };

  await mailTransport.sendMail(mailOptions);
  console.log('Account deletion confirmation email sent to:', email);
});
