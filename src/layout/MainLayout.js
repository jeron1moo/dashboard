import { Box, Button } from '@mui/material';
import React from 'react';
import DashboardDefault from '../views/dashboard/Default';
import useStyles from './styles';

export default () => {
  const classes = useStyles();
  return (
    <Box>
      <Button size="small" variant="contained">
        asd
      </Button>
      <Button size="small" color="secondary" variant="contained">
        asd
      </Button>
      <Button size="medium" variant="outlined" color="inherit">
        asd
      </Button>
      <DashboardDefault />
    </Box>
  );
};
