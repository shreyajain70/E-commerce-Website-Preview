import React from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export const LoginInPage = () => {
  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="login-logo">
          <img
            src="https://i.pinimg.com/736x/51/60/ac/5160ac8aafcad38b85208a7b6bfdbd07.jpg"
            alt="logo"
          />
        </div>
        <h2 className="login-title">Log In</h2>
        <form className="login-form">
          <TextField
            className="login-input"
            label="Email"
            required
            type="email"
            variant="standard"
            fullWidth
          />
          <TextField
            className="login-input"
            label="Password"
            required
            type="password"
            variant="standard"
            fullWidth
          />
          <a href="#" className="login-forgot">Forgot Password?</a>
          <Button className="login-btn" variant="contained" color="primary" fullWidth>
            Sign In
          </Button>
          <div className="login-signup">
            <span>Not Registered?</span>
            <Link href="#" className="login-signup-link">Sign Up</Link>
          </div>
          <div className="login-divider">
            <span>Or continue with social account</span>
          </div>
          <button className="login-google-btn" type="button">
            <img
              className="login-google-icon" 
              src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
              alt="google icon"
            />
            Sign In With Google
          </button>
        </form>
      </div>
    </div>
  )
}
