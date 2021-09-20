export default (theme) => ({
  MuiListItemButton: {
    styleOverrides: {
      root: {
        color: theme.palette.darkTextPrimary,
        paddingTop: '10px',
        paddingBottom: '10px',
        '&.Mui-selected': {
          color: theme.menuSelected,
          backgroundColor: theme.palette.menuSelectedBack,
          '&:hover': {
            backgroundColor: theme.palette.menuSelectedBack
          },
          '& .MuiListItemIcon-root': {
            color: theme.palette.menuSelected
          }
        },
        '&:hover': {
          backgroundColor: theme.palette.menuSelectedBack,
          color: theme.palette.menuSelected,
          '& .MuiListItemIcon-root': {
            color: theme.palette.menuSelected
          }
        }
      }
    }
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        color: theme.palette.darkTextPrimary,
        minWidth: '36px'
      }
    }
  },
  MuiListItemText: {
    styleOverrides: {
      primary: {
        color: theme.palette.textDark
      }
    }
  }
});
