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
      const validRecords = results.filter(
  row => row.overallStatus === "Valid"
);

const csvData = [
  "order_id,product_name,phone,country,date,payment_mode,phoneStatus,dateStatus,paymentStatus,overallStatus",

  ...results.map(row =>
    `${row.order_id},${row.product_name},${row.phone},${row.country},${row.date},${row.payment_mode},${row.phoneStatus},${row.dateStatus},${row.paymentStatus},${row.overallStatus}`
  )
].join("\n");

fs.writeFileSync(
  "output/cleaned.csv",
  csvData
);
const chunkSize = 1;

for (let i = 0; i < results.length; i += chunkSize) {

  const chunk = results.slice(
    i,
    i + chunkSize
  );

  const chunkCsv = [
    "order_id,product_name,phone,country,date,payment_mode,phoneStatus,dateStatus,paymentStatus,overallStatus",
    ...chunk.map(row =>
      `${row.order_id},${row.product_name},${row.phone},${row.country},${row.date},${row.payment_mode},${row.phoneStatus},${row.dateStatus},${row.paymentStatus},${row.overallStatus}`
    )
  ].join("\n");

  fs.writeFileSync(
    `output/chunk_${i / chunkSize + 1}.csv`,
    chunkCsv
  );
}

res.json({
  message: "CSV Processed Successfully",
  data: results
});

    });

});
app.get("/download", (req, res) => {

  const filePath = "output/cleaned.csv";

  res.download(filePath);

});
app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});