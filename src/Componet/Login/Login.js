import { Alert, Button, CircularProgress, TextField } from "@mui/material";
import React,{useState, useEffect} from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from './../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    let location = useLocation();
     const history = useNavigate();
    const {user, loginUser, isLoading } = useAuth();
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field,value)
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    const handleLoginSubmit = e =>{
      loginUser(loginData.email,loginData.password, location, history)
        // alert('hello')
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
          <TextField className="login-input"
            style={{ width: "50%" }}
            label="email"
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
          <Button className="login-input" style={{ width: "50%" }}  type='submit'  variant="contained">
              
            Login
          </Button>
          <br></br>
          <br></br>
          <Button  className="login-input"style={{ width: "50%" }} variant="contained">
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
      {isLoading && <CircularProgress />}
     {user?.email && <Alert severity="success">This is a success login</Alert> }
    </div>
  );
};

export default Login;
