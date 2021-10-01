import { Chip } from '@mui/material';
import React from 'react';
import useStyles from './styles';

const ProfileSection = () => {
  const classes = useStyles();
  return (
    <>
      <Chip classes={{ label: classes.profileLabel }}>dss</Chip>
    </>
  );
};

export default ProfileSection;
