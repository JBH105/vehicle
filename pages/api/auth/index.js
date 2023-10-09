import Userdata from "../models/auth";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dbConnect from "../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  // SignUP
  if (method === "POST" && req.body.apitype == "Register") {
    const newuser = new Userdata({
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin,
      userImage: req.body.userImage,
    });

    try {
      const exict = await Userdata.findOne({ email: req.body.email });
      if (exict) {
        return res.status(404).json({ message: "Username already exit" });
      }

      await newuser.save();
      const token = jwt.sign({ id: newuser._id }, "process.env.JWT_SECRET", {
        expiresIn: "24h",
      });
      if (!token) throw Error("Couldnt sign the token");

      res
        .status(200)
        .json({ user: newuser, token, message: "User creation successful " });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
  // Login
  if (method === "POST" && req.body.apitype == "Login") {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    try {
      // Check for existing user
      const user = await Userdata.findOne({ email });

      if (!user) throw Error("User does not exist");
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!validPassword) throw Error("Invalid credentials");

      const token = jwt.sign({ id: user._id }, "process.env.JWT_SECRET", {
        expiresIn: "24h",
      });
      if (!token) throw Error("Couldnt sign the token");

      res.status(200).json({
        token,
        user,
        message: "User Login successful",
      });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }

  if (method === "POST" && req.body.apitype == "Google_Login") {
    await Authservice.LoginwithGoogle(req, (error, response) => {
      if (error) {
        return res.send({
          status: 422,
          error: error,
        });
      } else {
        return res.send({
          status: 200,
          message: response,
        });
      }
    });
  }
};
