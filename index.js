import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import mongoose from "mongoose";

import Enquiry from "./models/Enquiry.js";
import { sendEmail } from "./utils/sendEmail.js";
// import { sendWhatsApp } from "./utils/sendWhatsApp.js";


const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Health check
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

// Enquiry API
app.post("/api/enquiry", async (req, res) => {
  try {
    const enquiry = await Enquiry.create(req.body);

    // 1. Send Email
    await sendEmail(enquiry);

    // // 2. Send WhatsApp
    // await sendWhatsApp(enquiry);

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
