import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import imagesGalery from 'data/imagesGalery';
import {
  ImageButton,
  ImageSrc,
  Image,
  ImageBackdrop,
  ImageMarked,
} from './Buttons.styled';

export default function ButtonBases() {
  return (
    <Box
      sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}
    >
      {imagesGalery.map(image => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: theme => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
