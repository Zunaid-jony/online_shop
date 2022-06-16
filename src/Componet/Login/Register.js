import { Button, TextField } from "@mui/material";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import { useState } from "react";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser } = useAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
   if(loginData.password !== loginData.password2){
       alert('Your Password did not match plase try agein')
       return
      
}
registerUser(loginData.email, loginData.password )
    e.preventDefault();
  };
 
  return (
    <div className="loginSections">
      <form onSubmit={handleLoginSubmit}>
        <div className="registerInput">
          <h3>Login</h3>

          <br></br>
          <TextField
            style={{ width: "50%" }}
            label="Full Name"
          
            name="userName"
            onChange={handleOnChange}
            variant="outlined"
          />
          <br></br>
          <br></br>
          <TextField
            style={{ width: "50%" }}
            label="Email"
            type="email"
            name="email"
            onChange={handleOnChange}
            variant="outlined"
          />
          <br></br>
          <br></br>
          <TextField
            style={{ width: "50%" }}
            id="outlined-password-input"
            name="pasword"
            onChange={handleOnChange}
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <br></br>
          <br></br>
          <TextField
            style={{ width: "50%" }}
            id="outlined-password-input"
            label="Re-Password"
            name="password2"
            onChange={handleOnChange}
            type="password"
            autoComplete="current-password"
          />
          <br></br>
          <br></br>
          <Button style={{ width: "50%" }} type="submit" variant="contained">
            Register
          </Button>
          <br></br>
          <br></br>
          <Button style={{ width: "50%" }} variant="contained">
            {" "}
            <FcGoogle></FcGoogle> Google
          </Button>
          <br></br>
          <Link style={{ textDecoration: "none" }} to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
