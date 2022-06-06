import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
const Navigation = () => {
    return (
        <div>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" r={1}  style={{background:'white',position: 'fixed'}}>
        <Toolbar  >
          <IconButton
            size="large"
            edge="start"
            style={{color:'black'}}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
         <Link to='/' style={{color:'black'}}> <Button color="inherit">Home</Button></Link>
         <Link to='/dashboard'  style={{color:'black'}}> <Button color="inherit"><DashboardCustomizeRoundedIcon/></Button></Link>
         <Link to='/buy'  style={{color:'black'}}> <Button color="inherit"> <ShoppingCartRoundedIcon/></Button></Link>
         <Link to='/login'  style={{color:'black'}}> <Button color="inherit">< LockOpenRoundedIcon></LockOpenRoundedIcon></Button></Link>
    
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
};

export default Navigation;