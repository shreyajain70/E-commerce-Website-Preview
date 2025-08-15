import React from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";


 const SignUpPage = () => {
    return (
        <>
            <div>


                <div className="logo-div">
                    <img
                        className="logo"
                        src="https://i.pinimg.com/736x/51/60/ac/5160ac8aafcad38b85208a7b6bfdbd07.jpg"
                        alt="logo"
                    />
                </div>
                <h2>SignUp Page</h2>


                <form>
                    <div> <TextField id="standard-basic" label="Full Name" required type="text" variant="standard" /></div>
                       <div> <TextField id="standard-basic" label="Phone Number" required type="number" variant="standard" /></div>
                    <div> <TextField id="standard-basic" label="Email" required type="email" variant="standard" /></div>
                    <div> <TextField id="standard-basic" label="password" required type="password" variant="standard" /></div>


                    <a>Forget Password</a>
                    <Button>SignIn</Button>
                    <Button>Cancel</Button>
                    <p>Already Registered <Link>Log In</Link></p>
                    <h5>Or continue with social account</h5>

                    <button><img src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"></img>Sign In with Google</button>

                </form>


            </div>


        </>


    )
}
export default SignUpPage