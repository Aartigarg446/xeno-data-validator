import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [stats, setStats] = useState({
  total: 0,
  valid: 0,
  invalid: 0,
});

const [records, setRecords] = useState([]);

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a CSV file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
   const response = await axios.post(
  "http://localhost:5000/upload",
  formData
);

const data = response.data.data;

setRecords(data);

const validCount = data.filter(
  (item) => item.overallStatus === "Valid"
).length;

setStats({
  total: data.length,
  valid: validCount,
  invalid: data.length - validCount,
});

setMessage("✅ CSV Processed Successfully");
    } catch (error) {
      console.log(error);
     setMessage("❌ Upload Failed");
    }
  };

  return (
    <div className="container">

      <div className="card">
        <div className="logo">
  🤖
</div>
<p className="enterprise">
  Enterprise Transaction Validation Platform
</p>

        <h1>Xeno Data Validator</h1>
        <p className="enterprise-title">
  🚀 Enterprise Grade CSV Validation Engine
</p>

   <p>
  Validate • Clean • Process Transaction Data
  Across Multiple Countries
</p>
<p className="features">
  🌍 Multi-Country Validation <br />
  📱 Phone Number Verification <br />
  📅 Date Format Validation <br />
  💳 Payment Mode Validation <br />
  📂 Automatic CSV Splitting <br />
  ⬇️ Cleaned Data Export
</p>
<div className="ai-badge">
  🤖 AI Powered Transaction Validation
</div>
<div className="rules-card">

  <h3>Validation Rules</h3>

  <p>🇮🇳 India → 10 Digit Phone Number</p>

  <p>🇸🇬 Singapore → 8 Digit Phone Number</p>

  <p>📅 Date Format → YYYY-MM-DD</p>

  <p>💳 Payment Modes → UPI, Cash, Card</p>

</div>
        <label className="upload-label">

  📂 Select CSV File

  <input
    type="file"
    accept=".csv"
    onChange={(e) =>
      setFile(e.target.files[0])
    }
  />

</label>

  {file && (
  <p className="file-selected">
    📄 {file.name} Selected
  </p>
)}
{message && (
  <p className="success-msg">
    {message}
  </p>
)}
{stats.total > 0 && (
<div className="stats-container">

  <div className="stat-card">
    <h3>Total</h3>
    <p>{stats.total}</p>
  </div>

  <div className="stat-card">
    <h3>Valid</h3>
    <p>{stats.valid}</p>
  </div>

  <div className="stat-card">
    <h3>Invalid</h3>
    <p>{stats.invalid}</p>
  </div>

</div>
)}
{stats.total > 0 && (
  <div className="quality-card">
    {stats.total > 0 && (
  <div className="insights-card">

    <h3>AI Insights</h3>

    <p>
      • {stats.invalid} invalid record(s) detected
    </p>

    <p>
      • Payment validation completed
    </p>

    <p>
      • Date validation completed
    </p>

    <p>
      • Data quality score:
      {" "}
      {Math.round(
        (stats.valid / stats.total) * 100
      )}%
    </p>

  </div>
)}

    <h3>AI Data Quality Score</h3>

    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{
          width: `${(stats.valid / stats.total) * 100}%`,
        }}
      ></div>
    </div>

  <p>
  {Math.round(
    (stats.valid / stats.total) * 100
  )}% Clean Data
</p>

<p>

{
(stats.valid / stats.total) * 100 >= 80

? "🟢 Excellent Data Quality"

: (stats.valid / stats.total) * 100 >= 50

? "🟡 Moderate Data Quality"

: "🔴 Poor Data Quality"

}

</p>

  </div>
)}
        <button onClick={uploadFile}>
  Upload CSV
</button>

<a
  href="http://localhost:5000/download"
  target="_blank"
  rel="noreferrer"
>
  <button>
    Download Cleaned CSV
  </button>
</a>

<a
  href="http://localhost:5000/download-report"
  target="_blank"
  rel="noreferrer"
>
  <button>
    Download Validation Report
  </button>
</a>

          {records.length > 0 && (

  <table className="result-table">

    <thead>
  <tr>
    <th>Order ID</th>
    <th>Country</th>
<th>Phone</th>
<th>Date</th>
<th>Payment</th>
<th>Status</th>
  </tr>
</thead>
    <tbody>

      {records.map((record, index) => (

        <tr key={index}>
  <td>{record.order_id}</td>
  <td>{record.country}</td>
<td>{record.phone}</td>
<td>{record.date}</td>
<td>{record.payment_mode}</td>
  <td>
  <span
    className={
      record.overallStatus === "Valid"
        ? "valid"
        : "invalid"
    }
  >
    {record.overallStatus}
  </span>
</td>
</tr>

      ))}

    </tbody>

  </table>

)}
<div className="tech-stack">
  React.js • Node.js • Express.js • CSV Parser • Multer
</div>
<p className="footer">
  Built with React.js, Node.js & AI Validation Logic
</p>
    

      </div>

    </div>
  );
}

export default App;