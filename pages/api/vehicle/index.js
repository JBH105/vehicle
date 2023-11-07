import vehicle from "../models/vehiclemodels";
import dbConnect from "../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  // Add Vehicle
  if (method === "POST" && req.body.apitype == "VehicleRegister") {
    const data = req.body;
    try {
      if (!data?.userID) {
        return res.status(400).json({ message: "User not found" });
      }
      const newuser = new vehicle(data);
      await newuser.save();

      res.status(200).json({ user: newuser, message: "Successfully " });
    } catch (error) {
      return res.status(404).json({ message: "Internal Server Error" });
    }
  }
};
