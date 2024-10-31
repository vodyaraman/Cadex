import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';

const ImportantSection: React.FC = () => {
  return (
    <section>
      <Typography variant="h2" gutterBottom>
        Also very important title
      </Typography>
      <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }} gap={4}>
        {[...Array(6)].map((_, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="h5" component="div">
                Title
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Button variant="contained" color="primary" sx={{ marginTop: 4 }}>Contact us</Button>
    </section>
  );
};

export default ImportantSection;