import React from 'react';
import { Avatar, Box, ButtonBase } from '@mui/material';
import SearchSection from './SearchSection';
import useStyles from './styles';
import LogoSection from '../LogoSection';
import { IconMenu2 } from '@tabler/icons';
import NotificationSection from './NotificationSection';
import ProfileSection from './ProfileSection';

const Header = ({ handleLEftDrawerToggle }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.boxContainer}>
        <Box
          component="span"
          sx={{ display: { mobile: 'none', tablet: 'block' }, flexGrow: 1 }}
        >
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            className={classes.headerAvatar}
            onClick={handleLEftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>
      <SearchSection theme="light" />
      <div className={classes.grow} />
      <div className={classes.grow} />

      <NotificationSection />
      <ProfileSection />
    </>
  );
};

export default Header;
