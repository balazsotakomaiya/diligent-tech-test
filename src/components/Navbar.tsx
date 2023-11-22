import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import logo from '../assets/logo.svg';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Logo" style={{ marginRight: 10 }}/>
                    <Typography variant="h6" component="div">
                        Assets
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
