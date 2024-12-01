import React from "react";
import "../../styles/ProfilePage.css";
import { Button } from "@mui/material";

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div style={{border:'1px solid gray', padding:'12px'}}>
        <div className="profile-header">
          <img src="/logo.png" alt="Profile Logo" className="profile-logo" />
          <h2>Profile</h2>
        </div>
        <form className="profile-form">
          <div className="form-row">
            <label>Sponsor Name</label>
            <input type="text" value="Neshar Ahmad" readOnly />
          </div>
          <div className="form-row">
            <label>Sponsor Id</label>
            <input type="text" value="Neshar123" readOnly />
          </div>
          <div className="form-row">
            <label>DOJ</label>
            <input type="text" value="23 Jul, 2024 09:49 AM" readOnly />
          </div>
          <div className="form-row">
            <label>User Id *</label>
            <input type="text" value="Seraj123" />
          </div>
          <div className="form-row">
            <label>Name *</label>
            <input type="text" value="Seraj Ahmad" />
          </div>
          <div className="form-row">
            <label>Gender *</label>
            <select>
              <option value="Male" selected>
                Male
              </option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-row">
            <label>Email *</label>
            <input type="email" value="ahmadseraj97@gmail.com" />
          </div>
          <div className="form-row">
            <label>Mobile *</label>
            <input type="tel" value="9118305078" />
          </div>
          <div className="form-row">
            <label>City</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>State</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Country</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Account Number</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Account Type</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Ifsc</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Bank Name</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Branch Name</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Adhar</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Nominee </label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Googlepay </label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Phonepe </label>
            <input type="text" />
          </div>
        </form>
      </div>
      <div style={{border:'1px solid gray',width:'100%', marginTop:'1px', padding:'7px'}}>
        <Button variant="contained" sx={{backgroundColor:'#3C6F18', color:'white', border:'0'}}>Submit</Button>
      </div>
    </div>
  );
};

export default ProfilePage;
