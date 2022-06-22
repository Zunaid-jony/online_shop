import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import Login from './../Login/Login';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
    return (
        <>
            <Box 
            bgcolor='#ff0080' color='white'
            px={{xs:3, sm: 10}}
            py={{xs:5, sm: 10}}
          
            
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} >
                                   help 
                            </Box>
                            <Box>
                                <Link href='/facebok.com' color='inherit'></Link>
                                Cotact
                            </Box>
                            <Box>
                                <Link href='/ddfd' color='inherit'></Link>
                                Support
                            </Box>
                            <Box>
                                <Link href='/ddfd' color='inherit'></Link>
                                Privacy
                            </Box>

                        </Grid>
                        {/*  */}
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} >
                                   Account
                            </Box>
                            <Box>
                                <Link href='/ddfd' color='inherit'></Link>
                                Login
                            </Box>
                            <Box>
                                <Link href='/ddfd' color='inherit'></Link>
                                Register
                            </Box>
                            <Box>
                                <Link href='/ddfd' color='inherit'></Link>
                                Privacy
                            </Box>

                        </Grid>
                        {/*  */}
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} >
                                   Messages
                            </Box>
                            <Box>
                               
                               
                                <Link  style={{textDecoration:'none'}} href="#https://www.facebook.com/" color='inherit'> 
                                 <EmailIcon sx={{ m: 2 }} ></EmailIcon>
                                 
                                 </Link>
                                <Link  style={{textDecoration:'none'}} href="#https://github.com/Zunaid-jony" color='inherit'> 
                                <GitHubIcon></GitHubIcon>
                                 
                                 
                                 </Link>
                                <Link  style={{textDecoration:'none'}} href="#https://www.linkedin.com/in/md-jony-miah-68a164176/" color='inherit'> 
                                <LinkedInIcon sx={{ m: 2 }}></LinkedInIcon>
                                 
                                 
                                 </Link>
                            </Box>
                            {/*  */}
                            <Box>
                               
                               
                               <Link  style={{textDecoration:'none'}} href="#https://mail.google.com/mail/u/2/#inbox" color='inherit'> 
                                < FacebookIcon sx={{ m: 2 }} ></FacebookIcon>
                                
                                </Link>
                               <Link  style={{textDecoration:'none'}} href="#/https://www.facebook.com/" color='inherit'> 
                               <GitHubIcon></GitHubIcon>
                                
                                
                                </Link>
                               <Link  style={{textDecoration:'none'}} href="#/https://www.facebook.com/" color='inherit'> 
                               <LinkedInIcon sx={{ m: 2 }}></LinkedInIcon>
                                
                                
                                </Link>
                           </Box>
                            
                           
                           

                        </Grid>

                    </Grid>
                    <Box textAlign='center' pt={{xs:5, sm: 10}} pb={{xs: 5, sm:0}}>
                        OnlineShop Jony &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box> 
            
        </>
    );
};

export default Footer;