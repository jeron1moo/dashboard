import {
  AppBar,
  Box,
  Breadcrumbs,
  CssBaseline,
  Toolbar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import React, { useEffect } from 'react';
import useStyles from '../styles';
import { Outlet } from 'react-router-dom';
import { IconChevronRight } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { SET_MENU } from '../../store/redux/constants/customizaiton';
import navigation from '../../menu-items';
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  useEffect(() => {
    dispatch({ type: SET_MENU, opened: !matchDownMd });
  }, [matchDownMd]);

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        className={leftDrawerOpened ? classes.appBarWidth : classes.appBar}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>
      <Sidebar
        drawerOpen={leftDrawerOpened}
        drawerToggle={handleLeftDrawerToggle}
      />
      <main
        className={`${classes.content} ${
          leftDrawerOpened && classes.contentShift
        }`}
      >
        <Outlet />
        <Breadcrumbs
          separator={IconChevronRight}
          naviagtion={navigation}
          icon
          title
          rightAlign
        />
      </main>
    </Box>
  );
};

export default MainLayout;
