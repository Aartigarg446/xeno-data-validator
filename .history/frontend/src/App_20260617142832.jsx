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

        <h1>Xeno Data Validator</h1>

       <p>
  AI-Powered Validation, Cleaning and Processing
  of Global Transaction Data
</p>
<p className="features">
  ✅ Phone Validation <br />
  ✅ Date Validation <br />
  ✅ Payment Validation <br />
  ✅ CSV Splitting <br />
  ✅ Cleaned CSV Download
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
  <p>
    Selected File: {file.name}
  </p>
)}
{message && (
  <p>{message}</p>
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
        <th>Phone</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>

      {records.map((record, index) => (

        <tr key={index}>
          <td>{record.order_id}</td>
          <td>{record.phone}</td>
          <td>
            {record.overallStatus === "Valid"
              ? "✅ Valid"
              : "❌ Invalid"}
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