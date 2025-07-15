import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    costGuess: '',
    spidrPin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="form-container">
      <h1>Spidr Air Fryer Interest Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Guess the Air Fryer’s Cost ($):
          <input
            type="number"
            name="costGuess"
            value={formData.costGuess}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Spidr PIN (####-####-####-####):
          <input
            type="text"
            name="spidrPin"
            value={formData.spidrPin}
            onChange={handleChange}
            pattern="\d{4}-\d{4}-\d{4}-\d{4}"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
