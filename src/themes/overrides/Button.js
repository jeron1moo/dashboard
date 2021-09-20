export default (theme) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 500,
        textTransform: 'capitalize',
        borderRadius: `${theme.shape.borderRadius}px`,
        '&:hover': {
          boxShadow: theme.shadows[0]
        }
      },
      sizeLarge: {
        height: 48
      },
      containedInherit: {
        color: theme.palette.grey[800],
        '&:hover': {
          boxShadow: theme.customShadows.z8,
          backgroundColor: theme.palette.grey[400]
        }
      },
      containedPrimary: {
        '&:hover': {
          boxShadow: theme.customShadows.primary
        }
      },
      containedSecondary: {
        '&:hover': {
          boxShadow: theme.customShadows.secondary
        }
      },
      outlinedInherit: {
        border: `1px solid ${theme.palette.grey[500]}`,
        '&:hover': {
          backgroundColor: theme.palette.action.hover
        }
      },
      textInherit: {
        '&:hover': {
          backgroundColor: theme.palette.action.hover
        }
      }
    }
  }
});
