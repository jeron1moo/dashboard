import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton
} from '@mui/material';
import React from 'react';
import useStyles from './styles';

const SkeletonTotalIncomeCard = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent className={classes.content}>
        <List className={classes.padding}>
          <ListItem
            alignItems="center"
            disableGutters
            className={classes.padding}
          >
            <ListItemAvatar>
              <Skeleton variant="rect" width={44} height={44} />
            </ListItemAvatar>
            <ListItemText
              className={classes.padding}
              primary={<Skeleton variant="rect" height={20} />}
              secondary={<Skeleton variant="text" />}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default SkeletonTotalIncomeCard;
