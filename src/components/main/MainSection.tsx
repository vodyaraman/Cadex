import React from 'react';
import { Box, Typography } from '@mui/material';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const MainSection: React.FC = () => {
  return (
    <section>
      <Box 
        display="flex" 
        flexDirection={{ xs: 'column', md: 'row' }} 
        alignItems="center" 
        gap={4}
      >
        <Box flex={1}>
          <Typography variant="h2" gutterBottom>
            Most important title on the page
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante.
          </Typography>
        </Box>
        <Box 
          flex={1} 
          p={2} 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
          sx={{
            width: '100%',
            minHeight: 300,
            '> .yt-lite': {
              width: '100%',
              height: '100%',
              maxWidth: 560,
              aspectRatio: '16/9',
            },
          }}
        >
          <LiteYouTubeEmbed
            id="dQw4w9WgXcQ"
            title="YouTube Video"
            wrapperClass="yt-lite"
          />
        </Box>
      </Box>
    </section>
  );
};

export default MainSection;
