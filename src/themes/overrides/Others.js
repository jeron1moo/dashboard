export default (theme) => ({
  MuiSlider: {
    styleOverrides: {
      root: {
        '&.Mui-disabled': {
          color: theme.palette.grey[300]
        }
      },
      mark: {
        backgroundColor: theme.palette.paper,
        width: '4px'
      },
      valueLabel: {
        color: theme.palette.primary.light
      }
    }
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: theme.palette.divider,
        opacity: 1
      }
    }
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        color: theme.palette.primary.dark
      }
    }
  },
  MuiChip: {
    styleOverrides: {
      root: {
        '&.MuiChip-deletable .MuiChip-deleteIcon': {
          color: 'inherit'
        }
      }
    }
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        color: theme.paper,
        background: theme.palette.grey[700]
      }
    }
  }
});
