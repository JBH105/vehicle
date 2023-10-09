import mongoose from "mongoose";

const newMessage = new mongoose.Schema({
  message: {
    type: String,
    trim: true,
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    trim: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
});

export default mongoose.model("newMessage", newMessage);
