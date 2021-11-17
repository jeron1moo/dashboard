import { Avatar, Grid, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import MainCard from '../../../../components/cards/MainCard';
import SkeletonEarningCard from '../../../../components/cards/skeleton/EarningCard';
import useStyles from './styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EarningIcon from '../../../../assets/images/icons/earning.svg';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppOutlined';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveOutlined';

const EarningCard = ({ isLoading }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                    <img src={EarningIcon} alt="Notification" />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar
                    variant="rounded"
                    onClick={handleClick}
                    className={classes.avatarRight}
                  >
                    <MoreHorizIcon fontSize="inherit" />
                  </Avatar>
                  <Menu
                    id="menu-earning-card"
                    anchorEl={anchorEl}
                    keepMounted
                    onClose={handleClose}
                    open={Boolean(anchorEl)}
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
                    <MenuItem onClick={handleClose}>
                      <GetAppTwoToneIcon
                        fontSize="inherit"
                        className={classes.menuItem}
                      />{' '}
                      Import Card
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FileCopyTwoToneIcon
                        fontSize="inherit"
                        className={classes.menuItem}
                      />{' '}
                      Copy Data
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <PictureAsPdfTwoToneIcon
                        fontSize="inherit"
                        className={classes.menuItem}
                      />{' '}
                      Export
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ArchiveTwoToneIcon
                        fontSize="inherit"
                        className={classes.menuItem}
                      />{' '}
                      Archive File
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography className={classes.cardHeading}>
                    $500.00
                  </Typography>
                </Grid>
                <Grid item>
                  <Avatar className={classes.avatarCircle}>
                    <ArrowUpwardIcon
                      fontSize="inherit"
                      className={classes.circleIcon}
                    />
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ mb: 1.25 }}>
              <Typography className={classes.subHeading}>
                Total Earning
              </Typography>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

export default EarningCard;
