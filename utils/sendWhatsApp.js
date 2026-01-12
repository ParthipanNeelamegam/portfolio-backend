import axios from "axios";

export const sendWhatsApp = async (enquiry) => {
  const url = `https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_ID}/messages`;

  const payload = {
    messaging_product: "whatsapp",
    to: process.env.WHATSAPP_TO,
    type: "text",
    text: {
      body: `🔔 New Portfolio Enquiry

Name: ${enquiry.name}
Email: ${enquiry.email}
Project: ${enquiry.project}

Message:
${enquiry.message}`,
    },
  };

  await axios.post(url, payload, {
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
};
