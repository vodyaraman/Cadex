import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => (window.location.href = '/main')}
        >
          Some Company
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => (window.location.href = '/contact')}
        >
          Contact us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
