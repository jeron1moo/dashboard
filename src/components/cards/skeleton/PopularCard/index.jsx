import { Card, CardContent, Grid, Skeleton } from '@mui/material';
import React from 'react';
import { gridSpacing } from '../../../../store/redux/constants/theme';
import useStyles from './styles';

const PopularCard = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              spacing={gridSpacing}
            >
              <Grid item xs zeroMinWidth>
                <Skeleton variant="rect" height={20} />
              </Grid>
              <Grid item>
                <Skeleton variant="rect" height={20} width={20} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rect" height={150} />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignItems="center"
                  spacing={gridSpacing}
                  justifyContent="space-between"
                >
                  <Grid item xs={6}>
                    <Skeleton variant="rect" height={20} />
                  </Grid>
                  <Grid item xs={6}>
                    <Grid
                      container
                      alignItems="center"
                      spacing={gridSpacing}
                      justfyContent="space-between"
                    >
                      <Grid item xs zeroMinWidth>
                        <Skeleton variant="rect" height={20} />
                      </Grid>
                      <Grid item>
                        <Skeleton variant="rect" height={16} width={16} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Skeleton variant="rect" height={20} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignItems="center"
                  spacing={gridSpacing}
                  justfyContent="space-between"
                >
                  <Grid item xs={6}>
                    <Skeleton variant="rect" heihgt={20} />
                  </Grid>
                  <Grid item xs={6}>
                    <Grid
                      container
                      alignItems="center"
                      spacing={gridSpacing}
                      justfyContent="space-between"
                    >
                      <Grid item xs zeroMinWidth>
                        <Skeleton variant="rect" height={20} />
                      </Grid>
                      <Grid item>
                        <Skeleton variant="rect" height={16} width={16} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Skeleton variant="rect" height={20} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignItems="center"
                  spacing={gridSpacing}
                  justfyContent="space-between"
                >
                  <Grid item xs={6}>
                    <Skeleton variant="rect" heihgt={20} />
                  </Grid>
                  <Grid item xs={6}>
                    <Grid
                      container
                      alignItems="center"
                      spacing={gridSpacing}
                      justfyContent="space-between"
                    >
                      <Grid item xs zeroMinWidth>
                        <Skeleton variant="rect" height={20} />
                      </Grid>
                      <Grid item>
                        <Skeleton variant="rect" height={16} width={16} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Skeleton variant="rect" height={20} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignItems="center"
                  spacing={gridSpacing}
                  justfyContent="space-between"
                >
                  <Grid item xs={6}>
                    <Skeleton variant="rect" heihgt={20} />
                  </Grid>
                  <Grid item xs={6}>
                    <Grid
                      container
                      alignItems="center"
                      spacing={gridSpacing}
                      justfyContent="space-between"
                    >
                      <Grid item xs zeroMinWidth>
                        <Skeleton variant="rect" height={20} />
                      </Grid>
                      <Grid item>
                        <Skeleton variant="rect" height={16} width={16} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Skeleton variant="rect" height={20} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent className={classes.cardAction}>
        <Skeleton variant="rect" height={25} widht={75} />
      </CardContent>
    </Card>
  );
};

export default PopularCard;
