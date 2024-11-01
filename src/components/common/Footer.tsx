import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',
      }}
    >
      <Typography variant="h5" color="textSecondary" align="center">
        Some Company 2024
      </Typography>
    </Box>
  );
};

export default Footer;

    