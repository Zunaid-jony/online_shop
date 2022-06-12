import { Button, TextField } from "@mui/material";
import React,{useState, useEffect} from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field,value)
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    const handleLoginSubmit = e =>{
        alert('hello')
        e.preventDefault()
    }
  return (
    <div className="loginSection">
      <form onSubmit={handleLoginSubmit}>
        <div className="loginInput">
          <br></br>

          <h3>Login</h3>

          <br></br>
          <br></br>
          <TextField
            style={{ width: "50%" }}
            label="email"
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
            label="Password"
            name="pasword"
            onChange={handleOnChange}
            type="password"
            autoComplete="current-password"
          />
          <br></br>
          <br></br>
          <Button style={{ width: "50%" }} type="submit" variant="contained">
              
            Login
          </Button>
          <br></br>
          <br></br>
          <Button style={{ width: "50%" }} variant="contained">
            {" "}
            <FcGoogle></FcGoogle> Google
          </Button>
          <br></br>
          <p>
            {" "}
            <Link style={{ textDecoration: "none" }} to="/register">
              {" "}
              New User? Please Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
