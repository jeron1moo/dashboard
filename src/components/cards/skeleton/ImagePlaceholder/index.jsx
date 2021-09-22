import { Skeleton } from '@mui/material';
import React from 'react';

const SkeletonImagePlaceholder = ({ ...rest }) => (
  <Skeleton variant="rect" {...rest} animation="wave" />
);

export default SkeletonImagePlaceholder;
