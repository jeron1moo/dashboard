import React from 'react';

import { LinearProgress } from '@mui/material';
import useStyles from './styles';

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress color="primary" />
    </div>
  );
};

export default Loader;
