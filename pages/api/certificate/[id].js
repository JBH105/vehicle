import Userdata from "../models/auth";
import dbConnect from "../utils/dbConnect";
import vehicle from "../models/vehiclemodels";
import certificatemodels from "../models/certificatemodels";

dbConnect();

// Get User
export default async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    try {
      const { id } = req.query;
      const userData = await certificatemodels.find({ userID: id });
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

  if (method === "POST" && req.body.apitype == "Certificate") {
    try {
      const { id } = req.query;
      const { documentNumber } = req.body;

      const data = await certificatemodels.find({
        userID: id,
        startnumber: { $lte: documentNumber },
        endnumber: { $gte: documentNumber },
      });

      if (!data) {
        return res.status(400).json({ success: false });
      }
      res.status(200).send(data);
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
};
