export default (theme) => ({
  MuiCardHeader: {
    defaultProps: {
      titleTypographyProps: { variant: 'h6' },
      subheaderTypographyProps: { variant: 'body2' }
    },
    styleOverrides: {
      root: {
        color: theme.palette.textDark,
        padding: '24px'
      },
      title: {
        fontSize: '1.125rem'
      }
    }
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: theme.spacing(3)
      }
    }
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: theme.spacing(3)
      }
    }
  }
});
