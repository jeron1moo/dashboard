import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import MainCard from '../../../../components/cards/MainCard';
import SkeletonTotalGrowthBarChart from '../../../../components/cards/skeleton/TotalGrowthBarChart';
import { gridSpacing } from '../../../../store/redux/constants/theme';

import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';

import chartData from '../chart-data/total-growth-bar-chart-data';
import { useTheme } from '@emotion/react';

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
  const theme = useTheme();

  const { primary } = theme.palette.text;
  const grey200 = theme.palette.grey[200];

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;
  const grey500 = theme.palette.grey[500];

  React.useEffect(() => {
    const newChartData = {
      ...chartData.options,
      colors: [primary200, primaryDark, secondaryMain, secondaryLight],
      xaxis: {
        labels: {
          style: {
            colors: [
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary
            ]
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary]
          }
        }
      },
      grid: {
        borderColor: grey200
      },
      tooltip: {
        theme: 'light'
      },
      legend: {
        labels: {
          colors: grey500
        }
      }
    };

    if (!isLoading) {
      ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
    }
  }, [
    primary200,
    primaryDark,
    secondaryMain,
    secondaryLight,
    primary,
    grey200,
    isLoading,
    grey500
  ]);

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
