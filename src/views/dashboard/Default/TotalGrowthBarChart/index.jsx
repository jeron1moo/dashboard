import { Grid, MenuItem, Skeleton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import MainCard from '../../../../components/cards/MainCard';
import SkeletonTotalGrowthBarChart from '../../../../components/cards/skeleton/TotalGrowthBarChart';
import { gridSpacing } from '../../../../store/redux/constants/theme';

import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';

import chartData from '../chart-data/total-growth-bar-chart-data';

const status = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'month',
    label: 'This Month'
  },
  {
    value: 'year',
    label: 'This Year'
  }
];

const TotalGrowthBarCart = ({ isLoading }) => {
  const [value, setValue] = useState('today');
  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={gridSpacing}
              >
                <Grid item>
                  <Grid container spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Total Growth</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">$2,324.00</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Chart {...chartData} />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

export default TotalGrowthBarCart;
