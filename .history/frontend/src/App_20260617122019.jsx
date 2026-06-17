
import { useState } from "react";
import axios from "axios";

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

    const response = await axios.post(
      "http://localhost:5000/upload",
      formData
    );

    console.log(response.data);

    alert("CSV Uploaded Successfully");

  } catch (error) {

    console.log(error);

    alert("Upload Failed");
  }
};

  return (
    <div>

      <h1>Xeno Data Validator</h1>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
<br />

<button onClick={uploadFile}>
  Upload CSV
</button>

    </div>
  );
}

export default App;