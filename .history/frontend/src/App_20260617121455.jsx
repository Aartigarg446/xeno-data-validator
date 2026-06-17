import { useState } from "react";

function App() {

  const [file, setFile] = useState(null);

  return (
    <div>

      <h1>Xeno Data Validator</h1>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
      />

    </div>
  );
}

export default App;