import Userdata from "../models/auth";
import dbConnect from "../utils/dbConnect";
import vehicle from "../models/vehiclemodels";

dbConnect();

// Get User
export default async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    try {
      const { id } = req.query;
      const userData = await vehicle.find({ userID: id });
      if (!userData) {
        return res.status(401).send({ message: "User not found" });
      }
      res.status(200).send(userData);
    } catch (error) {
      console.log("error", error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }

  if (method === "DELETE") {
    try {
      const { id } = req.query;
      const data = await vehicle.findByIdAndDelete({ _id: id });
      if (!data) {
        return res.status(400).json({ success: false });
      }
      res.status = res.json("data has benn deleted");
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
};
