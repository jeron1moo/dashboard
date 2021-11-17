import {
  Avatar,
  Card,
  CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Paper,
  Popper,
  Switch,
  Typography
} from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import useStyles from './styles';
import User1 from '../../../../assets/images/users/user-round.svg';
import { useTheme } from '@emotion/react';
import { IconLogout, IconSearch, IconSettings } from '@tabler/icons';
import Transitions from '../../../../components/extended/Transition';
import MainCard from '../../../../components/cards/MainCard';
import PerfectScrollbar from 'react-perfect-scrollbar';
import UpgradePlanCard from './UpgradePlanCard';

const ProfileSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [sdm, setSdm] = useState(true);
  const [value, setValue] = useState('');
  const [notification, setNotificaiton] = useState(false);
  const [selectedIndex] = useState(1);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleLogout = async () => {
    console.log('%cLogout', 'color: #007acc;');
  };

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

  return (
    <>
      <Chip
        classes={{ label: classes.profileLabel }}
        className={classes.profileChip}
        icon={
          <Avatar
            src={User1}
            className={classes.headerAvatar}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
          />
        }
        label={
          <IconSettings
            stroke={1.5}
            size="1.5rem"
            color={theme.palette.primary.main}
          />
        }
        variant="outlined"
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        placement="bottom-end"
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
                offset: [0, 14]
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
                    <Grid container direction="column" spacing={0}>
                      <Grid item className={classes.flex}>
                        <Typography variant="h4">Good Morning.</Typography>
                        <Typography
                          component="span"
                          variant="h4"
                          className={classes.name}
                        >
                          John
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          Project Admin
                        </Typography>
                      </Grid>
                    </Grid>
                    <OutlinedInput
                      className={classes.searchControl}
                      id="input-search-profile"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      placeholder="Search profile options"
                      startAdornment={
                        <InputAdornment position="start">
                          <IconSearch
                            stroke={1.5}
                            size="1.3rem"
                            className={classes.startAdornment}
                          />
                        </InputAdornment>
                      }
                      aria-describedby="search-helper-text"
                    />
                    <Divider />
                    <PerfectScrollbar className={classes.scrollHeight}>
                      <UpgradePlanCard />
                      <Divider />
                      <Card className={classes.card}>
                        <CardContent>
                          <Grid container spacing={3} direction="column">
                            <Grid item>
                              <Grid
                                item
                                container
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <Grid item>
                                  <Typography variant="subtitle1">
                                    Start DND model
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Switch
                                    color="primary"
                                    checked={sdm}
                                    onChange={(e) => setSdm(e.target.checked)}
                                    name="sdm"
                                    size="small"
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Grid
                                item
                                container
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <Grid item>
                                  <Typography variant="subtitle1">
                                    Allow Notifications
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Switch
                                    checked={notification}
                                    onChange={(e) =>
                                      setNotificaiton(e.target.checked)
                                    }
                                    name="sdm"
                                    size="small"
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                      <Divider />
                      <List component="nav" className={classes.navContainer}>
                        <ListItemButton
                          className={classes.listItem}
                          sx={{ borderRadius: `8px` }}
                          selected={selectedIndex === 4}
                          onClick={handleLogout}
                        >
                          <ListItemIcon>
                            <IconLogout stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">Logout</Typography>
                            }
                          />
                        </ListItemButton>
                      </List>
                    </PerfectScrollbar>
                  </CardContent>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
