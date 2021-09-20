import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import useStyles from './styles';

export default () => {
  const classes = useStyles();
  return (
    <Box>
      <Button className={classes.root}>asd</Button>
      <Button size="small" variant="contained">
        asd
      </Button>
      <Button size="small" color="secondary" variant="contained">
        asd
      </Button>
      <Button size="medium" variant="outlined" color="inherit">
        asd
      </Button>
      <Button variant="text" color="inherit">
        asd
      </Button>
      <Typography variant="h1">sdf</Typography>
    </Box>
  );
};
