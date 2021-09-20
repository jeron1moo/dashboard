import React, { useMemo } from 'react';
import palette from './palette';
import shape from './shape';
import createTypography from './typography';
import breakpoints from './breakpoints';
import shadows, { customShadows } from './shadows';
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import copmonentsOverride from './overrides';

export default ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape,
      breakpoints,
      shadows,
      customShadows
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = copmonentsOverride(theme);
  theme.typography = { ...theme.typography, ...createTypography(theme) };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
