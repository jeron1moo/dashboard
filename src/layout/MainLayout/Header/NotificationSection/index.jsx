import { useTheme } from '@emotion/react';
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  CardActions,
  CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  Paper,
  Popper,
  Stack,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import { IconBell } from '@tabler/icons';
import { anchorRef } from 'material-ui-popup-state';
import React, { useEffect, useRef, useState } from 'react';
import useStyles from './styles';

import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from '../../../../components/cards/MainCard';
import Transitions from '../../../../components/extended/Transition';
import NotificationList from './NotificationList';
import { Link } from 'react-router-dom';

const status = [
  {
    value: 'all',
    label: 'All Notification'
  },
  {
    value: 'new',
    label: 'New'
  },
  {
    value: 'unread',
    label: 'Unread'
  },
  {
    value: 'other',
    label: 'Other'
  }
];

const NotificationSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('mobile'));

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Box component="span" className={classes.box}>
        <ButtonBase sx={{ borderRadius: '12px' }}>
          <Avatar
            variant="rounded"
            className={classes.headerAvatar}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            color="inherit"
          >
            <IconBell stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>
      <Popper
        placement={matchesXs ? 'bottom' : 'bottom-end'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [matchesXs ? 5 : 0, 20]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  border={false}
                  elevation={16}
                  content={false}
                  boxShadow
                  shadow={theme.shadows[16]}
                >
                  <CardContent className={classes.cardContent}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item xs={12}>
                        <div className={classes.bodyPPacing}>
                          <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Grid item>
                              <Stack direction="row" spacing={2}>
                                <Typography variant="subtitle1">
                                  All Notification
                                </Typography>
                                <Chip
                                  size="small"
                                  label="01"
                                  className={classes.notificationChip}
                                />
                              </Stack>
                            </Grid>
                            <Grid item>
                              <Typography
                                component={Link}
                                to="#"
                                variant="subtitle2"
                                color="primary"
                              >
                                Mark as all read
                              </Typography>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <PerfectScrollbar className={classes.scrollHeight}>
                          <Grid container direction="column" spacing={2}>
                            <Grid item xs={12}>
                              <div className={classes.textBoxSpacing}>
                                <TextField
                                  id="outlined-select-currency-native"
                                  select
                                  fullWidth
                                  value={value}
                                  onChange={handleChange}
                                  SelectProps={{
                                    native: true
                                  }}
                                >
                                  {status.map((option) => (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </option>
                                  ))}
                                </TextField>
                              </div>
                            </Grid>
                            <Grid item xs={12} p={0}>
                              <Divider className={classes.divider} />
                            </Grid>
                            <Grid item xs={12}>
                              <NotificationList />
                            </Grid>
                          </Grid>
                        </PerfectScrollbar>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <CardActions className={classes.cardAction}>
                    <Button size="small" disableElevation>
                      View All
                    </Button>
                  </CardActions>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default NotificationSection;
