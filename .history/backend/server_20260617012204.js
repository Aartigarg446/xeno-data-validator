const multer = require("multer");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send("Backend Running");
});
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({
    message: "CSV Uploaded Successfully",
    file: req.file,
  });
});
app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});