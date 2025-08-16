import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const navigate = useNavigate();

    return (
        <div className="signin-bg">
            <div className="signin-container">

                {/* Logo */}
                <div className="logo-div">
                    <img
                        className="logo"
                        src="https://i.pinimg.com/736x/51/60/ac/5160ac8aafcad38b85208a7b6bfdbd07.jpg"
                        alt="logo"
                    />
                </div>

                {/* Title */}
                <h2 className="signin-title">Sign Up</h2>

                {/* Form */}
                <form className="signin-form">
                    <TextField
                        className="input"
                        label="Full Name"
                        required
                        type="text"
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        className="input"
                        label="Phone Number"
                        required
                        type="number"
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        className="input"
                        label="Email"
                        required
                        type="email"
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        className="input"
                        label="Password"
                        required
                        type="password"
                        variant="standard"
                        fullWidth
                    />

                    {/* Forgot Password */}
                    <a href="#" className="forgot-password">Forgot Password?</a>

                    {/* Buttons */}
                    <Button type="submit" className="signin-btn" variant="contained" fullWidth>
                        Sign Up
                    </Button>
                    <Button variant="outlined" fullWidth>
                        Cancel
                    </Button>

                    {/* Already Registered */}
                    <div className="signup-option">
                        <span>Already Registered?</span>
                        <Link to={"/LogInPage"} className="signup-link">Log In</Link>
                    </div>

                    {/* Divider */}
                    <p className="social-divider">Or continue with social account</p>

                    {/* Google Sign In */}
                    <button type="button" className="google-signin-btn">
                        <img
                            className="google-icon"
                            src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
                            alt="Google"
                        />
                        Sign In with Google
                    </button>
                </form>

                {/* Go Back Button */}
                <Button
                    variant="text"
                    fullWidth
                    onClick={() => navigate(-1)}
                    style={{ marginTop: "16px" }}
                >
                    Go Back
                </Button>

            </div>
        </div>
    );
};

export default SignUpPage;
