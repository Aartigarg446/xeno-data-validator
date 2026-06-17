const multer = require("multer");
const express = require("express");
const cors = require("cors");
const csv = require("csv-parser");
const fs = require("fs");
const {
  validatePhone,
  validateDate,
  validatePayment
} = require("./validator");

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

  const results = [];

  fs.createReadStream(req.file.path)
    .pipe(
      csv({
        headers: [
          "order_id",
          "product_name",
          "phone",
          "country",
          "date",
          "payment_mode"
        ],
        skipLines: 1
      })
    )
    .on("data", (data) => {

  if (data.phone === "phone") {
    return;
  }

  const isPhoneValid = validatePhone(
    data.phone,
    data.country
  );
  const isDateValid = validateDate(
  data.date
);

const isPaymentValid = validatePayment(
  data.payment_mode
);

data.dateStatus = isDateValid
  ? "Valid"
  : "Invalid";

data.paymentStatus = isPaymentValid
  ? "Valid"
  : "Invalid";

data.overallStatus =
  isPhoneValid &&
  isDateValid &&
  isPaymentValid
    ? "Valid"
    : "Invalid";

  data.phoneStatus = isPhoneValid
    ? "Valid"
    : "Invalid";

  results.push(data);
})
    .on("end", () => {

      console.log(results);

      res.json({
        message: "CSV Processed Successfully",
        data: results
      });

    });

});
app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});