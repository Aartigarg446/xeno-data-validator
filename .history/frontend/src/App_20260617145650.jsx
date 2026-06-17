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

        <h1>Xeno Data Validator</h1>

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
        <input
          type="file"
          accept=".csv"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

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

    <h3>🤖 AI Data Quality Score</h3>

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

  </div>
)}
        <button onClick={uploadFile}>
          Upload CSV
        </button>

        <a
          href="http://localhost:5000/download"
          target="_blank"
        >
          <button>
            Download Cleaned CSV
          </button>
          {records.length > 0 && (

  <table className="result-table">

    <thead>
  <tr>
    <th>Order ID</th>
    <th>Country</th>
    <th>Phone</th>
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
<p className="footer">
  Built with React.js, Node.js & AI Validation Logic
</p>
        </a>

      </div>

    </div>
  );
}

export default App;