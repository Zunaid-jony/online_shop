import { Alert, Button, CircularProgress, TextField } from "@mui/material";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import { useState } from "react";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useNavigate();
  let location = useLocation();
  const { user, registerUser, isLoading } = useAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password did not match plase try agein");
      return;
    }
    registerUser(
      loginData.email,
      loginData.password,
      loginData.userName,
      history,
      location
    )
    e.preventDefault();
  };

  return (
    <div className="loginSections">
      {!isLoading && (
        <form onSubmit={handleLoginSubmit}>
          <div className="registerInput">
            <h3>Login</h3>

            <br></br>
            <TextField className="login-input"
              style={{ width: "50%" }}
              label="Full Name"
              name="userName"
              onChange={handleOnChange}
              variant="outlined"
            />
            <br></br>
            <br></br>
            <TextField className="login-input"
              style={{ width: "50%" }}
              label="Email"
              type="email"
              name="email"
              onChange={handleOnChange}
              variant="outlined"
            />
            <br></br>
            <br></br>
            <TextField className="login-input"
              style={{ width: "50%" }}
              id="outlined-password-input"
              name="password"
              onChange={handleOnChange}
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <br></br>
            <br></br>
            <TextField className="login-input"
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
            <Button className="login-input" style={{ width: "50%" }} type="submit" variant="contained">
              Register
            </Button>
            <br></br>
            <br></br>
            <Button className="login-input" style={{ width: "50%" }} variant="contained">
              {" "}
              <FcGoogle></FcGoogle> Google
            </Button>
            <br></br>
            <Link style={{ textDecoration: "none" }} to="/login">
              Login
            </Link>
          </div>
        </form>
      )}
      {isLoading && <CircularProgress />}
      {user?.email && <Alert severity="success">This is a success login</Alert>}
    </div>
  );
};

export default Register;
