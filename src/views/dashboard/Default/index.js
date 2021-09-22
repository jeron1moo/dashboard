import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const DashboardDefault = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            sdf
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            fsadf
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
