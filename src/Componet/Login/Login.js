import { Button, TextField } from '@mui/material';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='loginSection'>
            <div className='loginInput'>
            <br></br>
        
            <h3>Login</h3> 
           
            <br></br>
            <br></br>
            <TextField style={{ width: '50%'}}  label="email" type='email' variant="outlined" />
            <br></br>
            <br></br>
            <TextField
            style={{ width: '50%'}} 
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
        />
            <br></br>
            <br></br>
            <Button style={{ width: '50%'}}  variant="contained">Contained</Button>
            <br></br>
            <br></br>
            <Button style={{ width: '50%'}}  variant="contained"> <FcGoogle></FcGoogle> Google</Button>
            <br>
            </br>
            <p> <Link style={{textDecoration:'none'}} to='/register'> New User? Please Register</Link></p>
            
                
            </div> 

           
    
        </div>
    );
};

export default Login;