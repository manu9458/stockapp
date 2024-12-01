import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/LoginPage.css";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Check for fixed credentials
    if (email === "abrar" && password === "abrar@123") {
      navigate("/dashboard"); // Navigate to the Dashboard
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const toggleForm = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isSignup ? "signup" : "login"}`}>
          {isSignup ? "Signup Form" : "Login Form"}
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <label
            className={`slide login ${!isSignup ? "active" : ""}`}
            onClick={() => setIsSignup(false)}
          >
            Login
          </label>
          <label
            className={`slide signup ${isSignup ? "active" : ""}`}
            onClick={() => setIsSignup(true)}
          >
            Signup
          </label>
          <div
            className="slider-tab"
            style={{ left: isSignup ? "50%" : "0%" }}
          ></div>
        </div>
        <div className="form-inner">
          {!isSignup ? (
            <form className="login" onSubmit={handleLoginSubmit}>
              <div className="field">
                <input
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member?{" "}
                <a href="#" onClick={toggleForm}>
                  Signup now
                </a>
              </div>
            </form>
          ) : (
            <form className="signup">
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Confirm Password" required />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
