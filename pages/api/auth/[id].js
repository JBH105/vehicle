import Userdata from "../models/auth";
import dbConnect from "../utils/dbConnect";
import crypto from "crypto";

dbConnect();

// Get User
export default async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    try {
      const { id } = req.query;
      const userData = await Userdata.findOne({ _id: id });
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
      const data = await Userdata.findByIdAndDelete({ _id: id });
      if (!data) {
        return res.status(400).json({ success: false });
      }
      res.status = res.json("data has benn deleted");
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }

  if (method === "POST" && req.body.apitype == "discarddetail") {
    try {
      var { id } = req.query;
      const data = req.body;
      console.log(id);
      await Userdata.findByIdAndUpdate({ _id: id }, data);
      return res.send({ message: "Delete discard detail Sucessfully" });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }

  if (method === "POST" && req.body.apitype == "resetPassword") {
    try {
      const data = req.body;

      const resetPasswordToken = crypto
        .createHash("sha256")
        .update(data?.token)
        .digest("hex");

      const user = await Userdata.findOne({
        resetPasswordToken,
      });
      if (!user) {
        return res
          .status(403)
          .json({ message: "Reset Password Token is not valid" });
      }

      user.password = req.body.password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;

      await user.save();

      res.send(user);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
};
