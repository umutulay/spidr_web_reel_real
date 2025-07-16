import React, { useState } from 'react';
import './App.css';
import SpidrEffect from './SpidrEffect'; // Import the SpidrEffect component

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
    // You can add your form submission logic here
  };

  return (
    // This is the main container that will hold both the animation and the form.
    // We'll use CSS to make it a positioning context.
    <div className="form-container">
      {/* The particle effect is now wrapped in its own div for styling */}
      <div
        className="particles-background"
        onMouseOver={() => console.log("Hover detected on particles-background")}
        style={{ width: "100%", height: "100%", backgroundColor: "lightgray" }}
      >
        <SpidrEffect /> {/* Restore the SpidrEffect component here */}
      </div>

      {/* The form and its content are wrapped in a separate div to control layering */}
      <div className="form-content">
        <img src="/logo.png" alt="Spidr Logo" className="logo" />
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
            Guess the Air Fryer's Cost ($):
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
              placeholder="1234-5678-9012-3456"
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
