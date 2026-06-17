import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a CSV file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(
        "http://localhost:5000/upload",
        formData
      );

      alert("CSV Uploaded Successfully");
    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    }
  };

  return (
    <div className="container">

      <div className="card">

        <h1>Xeno Data Validator</h1>

        <p>
          Upload transaction CSV files and validate
          phone numbers, dates and payment modes.
        </p>

        <input
          type="file"
          accept=".csv"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

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
        </a>

      </div>

    </div>
  );
}

export default App;