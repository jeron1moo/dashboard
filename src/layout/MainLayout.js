import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import EarningCard from '../components/cards/skeleton/EarningCard';
import ImagePlaceholder from '../components/cards/skeleton/ImagePlaceholder';
import PopularCard from '../components/cards/skeleton/PopularCard';
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

      <Button
        component={Link}
        to="/users/"
        color="secondary"
        variant="contained"
      >
        To users
      </Button>
      <EarningCard />
      <ImagePlaceholder />
      <PopularCard />
    </Box>
  );
};
