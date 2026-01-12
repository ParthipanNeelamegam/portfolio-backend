import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

   console.log("RESEND KEY:", process.env.NOTIFY_EMAIL);

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (enquiry) => {
 

  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: [process.env.NOTIFY_EMAIL],
    subject: "🔔 New Portfolio Enquiry",
    html: `
      <h3>New Hire Me Enquiry</h3>
      <p><b>Name:</b> ${enquiry.name}</p>
      <p><b>Email:</b> ${enquiry.email}</p>
      <p><b>Project:</b> ${enquiry.project}</p>
      <p><b>Message:</b><br/>${enquiry.message}</p>
    `,
  });
};
