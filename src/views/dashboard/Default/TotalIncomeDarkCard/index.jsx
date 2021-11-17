import { StorefrontTwoTone } from '@mui/icons-material';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import React from 'react';
import MainCard from '../../../../components/cards/MainCard';
import SkeletonTotalIncomeCard from '../../../../components/cards/skeleton/TotalIncomeCard';
import useStyles from './styles';

const TotalIncomeDarkCard = ({ isLoading }) => {
  const classes = useStyles();
  return (
    <>
      {isLoading ? (
        <SkeletonTotalIncomeCard />
      ) : (
        <MainCard className={classes.card} contentClass={classes.content}>
          <List className={classes.padding}>
            <ListItem
              alignItems="center"
              disableGutters
              className={classes.padding}
            >
              <ListItemAvatar>
                <Avatar variant="rounded" className={classes.avatar}>
                  <StorefrontTwoTone fontSize="inherit" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ mt: 0.45, mb: 0.45 }}
                className={classes.padding}
                primary={<Typography variant="h4">$203k</Typography>}
                secondary={
                  <Typography variant="subtitle2" className={classes.secondary}>
                    Total Income
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </MainCard>
      )}
    </>
  );
};

export default TotalIncomeDarkCard;
