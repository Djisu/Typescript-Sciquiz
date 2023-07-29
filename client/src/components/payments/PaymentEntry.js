import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PaymentEntry = () => {
  const [paymentData, setPaymentData] = useState({
    telno: '',
    description: '',
    amount: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPaymentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a request to your Node.js backend to initiate the payment
      const response = await axios.post('/payment', paymentData);

      // Handle the response (e.g., show success message, redirect to payment URL, etc.)
      console.log('Payment initiated:', response.data);
    } catch (error) {
      console.error('Payment initiation error:', error);
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Hubtel Payment Integration</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="orderId"
            value={paymentData.telno}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={paymentData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={paymentData.amount}
            onChange={handleInputChange}
          />
        </div>
        <Link to="/dashboard" className="primary m-3">
          Go Back
        </Link>
        <button className="primary my-1" type="submit">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentEntry;
