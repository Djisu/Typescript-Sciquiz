import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../actions/alert';

const ExcelUpload = () => {
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('/api/upload', formData);
        console.log(response.data);

        // Handle success or error here
        dispatch(setAlert('File upload successful', 'success'));
        dispatch;
      } catch (error) {
        console.error(error);
        // Handle error
        dispatch(setAlert('Error occured while uploading file', 'danger'));
      }
    } else {
      // Handle file not selected
      dispatch(setAlert('File not selected', 'danger'));
    }
  };

  return (
    <div>
      <div className="form-group">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <input
          className="select-element"
          type="file"
          onChange={handleFileChange}
        />
        <button className="btn btn-primary" onClick={handleUpload}>
          Upload Excel
        </button>
      </div>
    </div>
  );
};

export default ExcelUpload;
