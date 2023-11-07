import vehicle from "../models/vehiclemodels";
import dbConnect from "../utils/dbConnect";
import certificatemodels from "../models/certificatemodels";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  if (method === "POST" && req.body.apitype == "CertificateRegister") {
    const dataArray = req.body.data;

    try {
      if (!dataArray || !Array.isArray(dataArray) || dataArray.length === 0) {
        return res.status(400).json({ message: "No data provided" });
      }

      const createdDocuments = await certificatemodels.insertMany(dataArray);

      res
        .status(200)
        .json({ documents: createdDocuments, message: "Successfully created" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
