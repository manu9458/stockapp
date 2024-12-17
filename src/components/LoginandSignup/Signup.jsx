import React, { useState } from "react";
import "../../styles/Signup.css"
import { useNavigate } from "react-router-dom";
function Signup() {
  const [formData, setFormData] = useState({
    loginId: "",
    password: "",
    retypePassword: "",
    name: "",
    mobile: "",
    email: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  
  const navigate = useNavigate();
  const handleclick = () =>{
    navigate('/')
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="header">
          <img
            src="https://via.placeholder.com/40" // Replace with your logo
            alt="logo"
            className="logo"
          />
          <h2>Register Please enter your data to register.</h2>
        </div>

        <input type="text" value="member" readOnly className="readonly-input" />
        <input
          type="text"
          placeholder="Login Id"
          name="loginId"
          value={formData.loginId}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Retype password"
          name="retypePassword"
          value={formData.retypePassword}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <div className="terms-container">
          <input
          style={{
            display: "block",
  width: "15px",
  marginBottom: "15px",
  padding: "10px",
  backgroundColor: "#2c313a",
  color: "#fff",
  border: "1px solid #444",
  borderRadius: "5px"
          }}
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label style={{marginBottom:'14px', marginLeft:'12px'}}>
            I agree to the <span className="terms">terms</span>
          </label>
        </div>

        <button type="submit" className="register-button">
          REGISTER
        </button>

        <p className="login-link" style={{cursor:'pointer'}}>
          Don't have an account? <a onClick={handleclick}>Log In.</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
