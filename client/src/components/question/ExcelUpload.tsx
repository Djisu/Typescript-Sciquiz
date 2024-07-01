import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAlertValue } from '../../actions/action-types/alert.ts';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';


const ExcelUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
       const selectedFile = e.target.files[0];
       setFile(selectedFile);
    }
   
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('/api/upload', formData);
        console.log(response.data);

        // Handle success or error here
        dispatch(setAlertValue('File upload successful', 'success', '01'));
        dispatch;
      } catch (error) {
        console.error(error);
        // Handle error
        dispatch(setAlertValue('Error occurred while uploading file', 'danger', '01'));
      }
    } else {
      // Handle file not selected
      dispatch(setAlertValue('File not selected', 'danger', '01'));
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
