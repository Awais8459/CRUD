import React, { useState } from "react";
import axios from "axios";

const UploadCSV = () => {
  const [file, setFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("csvFile", file);

    try {
      await axios.post("http://localhost:4000/product-details/uploadAll", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      alert("CSV file uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Error uploading CSV file.");
    }
  };

  return (
    <div>
      <h2>Upload CSV File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadCSV;
