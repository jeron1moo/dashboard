import { Link, Stack, Typography } from '@mui/material';
import React from 'react';

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography
      variant="subtitle2"
      component={Link}
      href="#"
      target="_blank"
      underline="hover"
    >
      asd
    </Typography>
    <Typography
      variant="subtitle2"
      component={Link}
      href="#"
      target="_blank"
      underline="hover"
    >
      &copy; rwe
    </Typography>
  </Stack>
);

export default AuthFooter;
