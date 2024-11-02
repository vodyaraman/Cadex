import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LessImportantSection: React.FC = () => {
  const images = [
    'https://i1.sndcdn.com/artworks-x8zI2HVC2pnkK7F5-4xKLyA-t500x500.jpg',
    'https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png',
    'https://images2.minutemediacdn.com/image/upload/c_fill,w_752,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/649273-youtube-rick-astley-6b69666394bb6020a913c6fcd18f74be.jpg',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2" gutterBottom>
          Less important title
        </Typography>
        <Box width="100%" mb={4}>
          <Slider {...sliderSettings}>
            {images.map((src, index) => (
              <Box key={index} sx={{ textAlign: 'center'}}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ marginTop: 4 }}
          onClick={() => (window.location.href = '/contact')}>
          Contact us
        </Button>
      </Box>
    </section>
  );
};

export default LessImportantSection;
