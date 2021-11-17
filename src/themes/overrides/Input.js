export default (theme) => ({
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        background: theme.palette.grey[50],
        borderRadius: `${theme.shape.borderRadius}px`,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.grey[400]
        },
        '&:hover $notchedOutline': {
          borderColor: theme.palette.primary.light
        },
        '&.MuiInputBase-multiline': {
          padding: 1
        }
      },
      input: {
        fontWeight: 500,
        background: theme.palette.grey[50],
        padding: '15.5px 14px',
        borderRadius: `${theme.shape.borderRadius}px`,
        '&.MuiInputBase-inputSizeSmall': {
          padding: '10px 14px',
          '&.MuiInputBase-inputAdornedStart': {
            paddingLeft: 0
          }
        }
      },
      inputAdornedStart: {
        paddingLeft: 4
      },
      notchedOutline: {
        borderRadius: `${theme.shape.borderRadius}px`
      }
    }
  }
});
