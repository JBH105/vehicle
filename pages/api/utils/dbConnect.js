const mongoose = require("mongoose");

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose
    .connect(
      "mongodb+srv://Restaurant:hIoNvntBCv8sc3uE@cluster0.8wzmk.mongodb.net/vehicle",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}

export default dbConnect;
