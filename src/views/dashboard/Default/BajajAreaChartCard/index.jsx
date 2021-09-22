import { Card, CardContent, Grid, Typography, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import useStyles from './styles';

import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';

import chartData from '../chart-data/bajaj-area-chart-data';

const BajajAreaCharCard = () => {
  const classes = useStyles();
  const theme = useTheme();

  const orangeDark = theme.palette.secondary[800];

  React.useEffect(() => {
    const newSupportChart = {
      ...chartData.options,
      colors: [orangeDark],
      tooltip: {
        theme: 'light'
      }
    };
    ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
  }, [orangeDark]);

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Grid container className={classes.contentContainer}>
          <Grid item xs={12}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="subtitle1" className={classes.title}>
                  Bajaj Finery
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4" className={classes.cost}>
                  $1839.00
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" className={classes.profit}>
              10% Profit
            </Typography>
          </Grid>
        </Grid>
        <Chart {...chartData} />
      </CardContent>
    </Card>
  );
};

export default BajajAreaCharCard;
