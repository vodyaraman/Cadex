import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Some Company
        </Typography>
        <Button variant="contained" color="secondary">Contact us</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
