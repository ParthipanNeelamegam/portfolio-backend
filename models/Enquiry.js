import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    project: String,
    message: String,
  },
  { timestamps: true }
);

export default mongoose.model("Enquiry", enquirySchema);
 