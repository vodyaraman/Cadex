import React from 'react';
import { Box, Typography } from '@mui/material';

interface CTAFormAfterResponseProps {
  message: string;
}

const CTAFormAfterResponse: React.FC<CTAFormAfterResponseProps> = ({ message }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f5f5f5"
      padding="2rem"
    >
      <Typography variant="h4" gutterBottom>
        {message}
      </Typography>
    </Box>
  );
};

export default CTAFormAfterResponse;
