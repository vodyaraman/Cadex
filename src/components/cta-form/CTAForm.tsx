import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const CTAForm: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#f5f5f5', padding: '4rem 0', textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Only CTA on the page
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 400,
          margin: '0 auto',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: '1rem', backgroundColor: '#333' }}
        >
          Submit
        </Button>
      </Box>
    </section>
  );
};

export default CTAForm;
