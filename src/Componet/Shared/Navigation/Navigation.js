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
import HomeIcon from '@mui/icons-material/Home';
import { useCart } from 'react-use-cart';
import useAuth from './../../../hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
const Navigation = () => {
  const {user, logout} = useAuth()
  const { isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,} = useCart()
    return (
        <div className='navigations'>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" r={1}  style={{background:'white',position: 'fixed'}}>
        <Toolbar className='navber-menu'  >
          {/* <IconButton
            size="large"
            edge="start"
            style={{color:'black'}}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
         <Link  to='/' style={{color:'#d84c92'}}> <Button color="inherit"><HomeIcon></HomeIcon></Button></Link>
         <Link to='/dashboard'  style={{color:'#d84c92'}}> <Button color="inherit"><DashboardCustomizeRoundedIcon/></Button></Link>
         <Link to='/buy'  style={{color:'#d84c92'}}>
            <Button color="inherit">
           <p className='natifications'> {totalItems} </p>
            <ShoppingCartRoundedIcon/> 
            
            </Button></Link>
          {

            user?.email ?
            <Link  to='/login'  style={{color:'#d84c92', textDecoration:'none'}}> <Button  onClick={logout} color="inherit"><LogoutIcon></LogoutIcon> </Button></Link> :
            <Link to='/login'  style={{color:'#d84c92'}}> <Button color="inherit">< LockOpenRoundedIcon></LockOpenRoundedIcon></Button></Link>
    
    
          }
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
};

export default Navigation;