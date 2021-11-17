export default (theme) => ({
  MuiPaper: {
    defaultProps: {
      elevation: 0
    },

    styleOverrides: {
      root: {
        backgroundImage: 'none'
      },
      rounded: {
        borderRadius: `${theme.shape.borderRadius}px`
      }
    }
  }
});
