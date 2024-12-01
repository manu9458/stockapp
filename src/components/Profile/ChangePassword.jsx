import React, { useState } from "react";
import "../../styles/ChangePassword.css"; // Import CSS for styling

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    // Add logic for changing the password
    alert("Password changed successfully!");
  };

  return (
   <div style={{boxSizing:'border-box', padding:'12px 12px'}}>
     <div className="change-password-container">
      <h2 className="page-title">Change Password</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="oldPassword">Password *</label>
            <input
              type="password"
              id="oldPassword"
              placeholder="Enter old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="newPassword"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              placeholder="Enter new password again"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>

   </div> 
    );
};

export default ChangePassword;
