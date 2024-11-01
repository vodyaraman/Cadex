import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

interface CTAFormProps {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}

const CTAForm: React.FC<CTAFormProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
      sx={{ backgroundColor: '#f0f0f0', padding: '2rem' }}
    >
      <Box
        width="100%"
        maxWidth={500}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '1rem',
          borderRadius: '8px',
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom textAlign="center">
          Only CTA on the page
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
          noValidate
          autoComplete="off"
        >
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                fullWidth
                margin="dense" // Уменьшаем отступы
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ''}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="dense"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            rules={{
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters long',
              },
              maxLength: {
                value: 300,
                message: 'Message cannot exceed 300 characters',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                margin="dense"
                error={!!errors.message}
                helperText={errors.message ? errors.message.message : ''}
              />
            )}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ marginTop: '1rem', padding: '0.5rem 1.5rem', fontSize: '0.9rem', backgroundColor: '#333' }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CTAForm;
