import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  startnumber: {
    type: String,
  },
  endnumber: {
    type: String,
  },
  document: {
    type: String,
  },
});

export default mongoose.models.Certificate ||
  mongoose.model("Certificate", certificateSchema);
