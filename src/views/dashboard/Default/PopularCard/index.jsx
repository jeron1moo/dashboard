import { MoreHorizOutlined } from '@mui/icons-material';
import { Grid, Menu, MenuItem, Skeleton, Typography } from '@mui/material';
import React from 'react';
import MainCard from '../../../../components/cards/MainCard';
import SkeletonPopularCard from '../../../../components/cards/skeleton/PopularCard';
import { gridSpacing } from '../../../../store/redux/constants/theme';
import BajajAreaCharCard from '../BajajAreaChartCard';
import useStyles from './styles';

const PopularCard = ({ isLoading }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
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
                  <Typography variant="h4">Popular Stocks</Typography>
                </Grid>
                <Grid item>
                  <MoreHorizOutlined
                    fontSize="small"
                    className={classes.primaryLight}
                    onClick={handleClick}
                  />
                  <Menu
                    id="menu-popular-card"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    variant="selectedMenu"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right'
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                  >
                    <MenuItem onClick={handleClose}> Today</MenuItem>
                    <MenuItem onClick={handleClose}> This Month</MenuItem>
                    <MenuItem onClick={handleClose}> This Year </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <BajajAreaCharCard />
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
        </MainCard>
      )}
    </>
  );
};

export default PopularCard;
