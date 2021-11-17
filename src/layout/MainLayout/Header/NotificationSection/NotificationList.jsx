import {
  Avatar,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography
} from '@mui/material';
import React from 'react';
import useStyles from './styles';
import User1 from '../../../../assets/images/users/user-round.svg';

const NotificationList = () => {
  const classes = useStyles();
  return (
    <>
      <List className={classes.navContainer}>
        <div className={classes.itemAction}>
          <ListItem alignItems="center" className={classes.listItem}>
            <ListItemAvatar>
              <Avatar alt="Joohn Doe" src={User1} />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant="subtitle1">John Doe</Typography>}
            />
            <ListItemSecondaryAction className={classes.listAction}>
              <Grid item xs={12}>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className={classes.actionColor}
                >
                  2 min ago
                </Typography>
              </Grid>
            </ListItemSecondaryAction>
          </ListItem>
          <Grid container direction="column" className={classes.listContainer}>
            <Grid item xs={12} className={classes.paddingBottom}>
              <Typography variant="subtitle2">
                It is a long established fact that a reader will be distracted
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Chip label="Unread" className={classes.listChipError} />
                </Grid>
                <Grid item>
                  <Chip label="New" className={classes.listChipWarning} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Divider className={classes.listDivider} />
      </List>
    </>
  );
};

export default NotificationList;
