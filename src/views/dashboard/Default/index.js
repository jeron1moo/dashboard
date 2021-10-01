import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { gridSpacing } from '../../../store/redux/constants/theme';
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalGrowthBarCart from './TotalGrowthBarChart';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';

const DashboardDefault = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item sm={8} xs={12}>
            <TotalGrowthBarCart isLoading={isLoading} />
          </Grid>
          <Grid item sm={8} xs={12}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
