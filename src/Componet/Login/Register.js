import { Button, TextField } from '@mui/material';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='loginSections'>
            <div className='registerInput'>

        
            <h3>Login</h3> 
           
         
            <br></br>
            <TextField style={{ width: '50%'}}  label="Full Name" type='email' variant="outlined" />
            <br></br>
            <br></br>
            <TextField style={{ width: '50%'}}  label="Email" type='email' variant="outlined" />
            <br></br>
            <br></br>
            <TextField style={{ width: '50%'}}     id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password" />
            <br></br>
            <br></br>
            <TextField
            style={{ width: '50%'}} 
                id="outlined-password-input"
                label="Re-Password"
                type="password"
                autoComplete="current-password"
        />
            <br></br>
            <br></br>
            <Button style={{ width: '50%'}}  variant="contained">Register</Button>
            <br></br>
            <br></br>
            <Button style={{ width: '50%'}}  variant="contained"> <FcGoogle></FcGoogle> Google</Button>
            <br></br>
            <Link style={{textDecoration:'none'}} to='/login'>Login</Link>
                
            </div> 

           
    
        </div>
    );
};

export default Register;