import { ArrowDownward, LocalMallOutlined } from '@mui/icons-material';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import MainCard from '../../../../components/cards/MainCard';
import SkeletonEarningCard from '../../../../components/cards/skeleton/EarningCard';
import useStyles from './styles';
import Chart from 'react-apexcharts';

import ChartDataMonth from '../chart-data/total-order-month-line-chart';
import ChartDataYear from '../chart-data/total-order-year-line-chart';

const TotalOrderLineChartCard = ({ isLoading }) => {
  const classes = useStyles();

  const [timeValue, setTimeValue] = useState(false);
  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <MainCard
          border={false}
          className={classes.card}
          contentClass={classes.content}
        >
          <Grid container direction="column">
            <Grid item>
              <Grid container justfyContent="space-between">
                <Grid item>
                  <Avatar variant="rounded" className={classes.avatar}>
                    <LocalMallOutlined fontSize="inherit" />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Button
                    disableElevation
                    variant={timeValue ? 'contained' : 'string'}
                    size="small"
                    onClick={(e) => handleChangeTime(e, true)}
                  >
                    Month
                  </Button>
                  <Button
                    disableElevation
                    variant={!timeValue ? 'contained' : 'string'}
                    size="small"
                    onClick={(e) => handleChangeTime(e, false)}
                  >
                    Year
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={{ mb: 0.75 }}>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <Grid container alignItems="center">
                    <Grid item>
                      {timeValue ? (
                        <Typography className={classes.cardHeading}>
                          $108
                        </Typography>
                      ) : (
                        <Typography className={classes.cardHeading}>
                          $961
                        </Typography>
                      )}
                    </Grid>
                    <Grid item>
                      <Avatar className={classes.avatarCircle}>
                        <ArrowDownward
                          fontSize="inherit"
                          className={classes.circleIcon}
                        />
                      </Avatar>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={classes.subHeading}>
                        Total Order
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  {timeValue ? (
                    <Chart {...ChartDataMonth} />
                  ) : (
                    <Chart {...ChartDataYear} />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

export default TotalOrderLineChartCard;
