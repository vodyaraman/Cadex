import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingScreen: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <CircularProgress />
      <Typography variant="h6" marginTop={2}>
        Loading, please wait...
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
