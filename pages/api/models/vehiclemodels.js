import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  phonenumber: {
    type: String,
  },
  phonenumber2: {
    type: String,
  },
  vehicleno: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default mongoose.models.Vehicle || mongoose.model("Vehicle", vehicleSchema);
