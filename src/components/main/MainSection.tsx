import React from 'react';
import { Box, Typography } from '@mui/material';

const MainSection: React.FC = () => {
  return (
    <section>
      <Box 
        display="flex" 
        flexDirection={{ xs: 'column', md: 'row' }} 
        alignItems="center" 
        gap={4}
        p={2}
      >
        <Box flex={1} p={2}>
          <Typography variant="h2" gutterBottom>
            Most important title on the page
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante.
          </Typography>
        </Box>
        <Box flex={1} p={2} display="flex" alignItems="center" justifyContent="center">
          <Box sx={{ background: '#e0e0e0', width: '100%', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h5">YouTube video</Typography>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default MainSection;
