import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalGrowthBarCart from './TotalGrowthBarChart';

const DashboardDefault = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <PopularCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalGrowthBarCart isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
