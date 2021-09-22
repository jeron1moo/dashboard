import { Skeleton } from '@mui/material';
import React from 'react';

const ImagePlaceholder = ({ ...rest }) => (
  <Skeleton variant="rect" {...rest} animation="wave" />
);

export default ImagePlaceholder;
