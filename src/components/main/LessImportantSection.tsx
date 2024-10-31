import React from 'react';
import { Typography, Button } from '@mui/material';

const LessImportantSection: React.FC = () => {
  return (
    <section>
      <Typography variant="h2" gutterBottom>
        Less important title
      </Typography>
      <Button variant="outlined" color="secondary">Contact us</Button>
    </section>
  );
};

export default LessImportantSection;
