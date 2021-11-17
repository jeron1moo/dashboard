import { Card, CardContent, Grid, Skeleton } from '@mui/material';
import React from 'react';
import useStyles from './styles';

const SkeletonEarningCard = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Grid container direction="column">
          <Grid item>
            <Grid container justfyContent="space-between">
              <Grid item>
                <Skeleton variant="rect" width={44} height={44} />
              </Grid>
              <Grid item>
                <Skeleton variant="rect" width={34} height={34} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item>
              <Skeleton
                variant="rect"
                className={classes.cardHeading}
                height={40}
              />
            </Grid>
            <Grid item>
              <Skeleton variant="rect" height={30} />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SkeletonEarningCard;
