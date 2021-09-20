const responsiveFontSizes =
  (theme) =>
  ({ sm, md, lg }) => ({
    [theme.breakpoints.down('mobile')]: {
      fontSize: theme.typography.pxToRem(sm)
    },
    [theme.breakpoints.up('mobile')]: {
      fontSize: theme.typography.pxToRem(md)
    },
    [theme.breakpoints.up('laptop')]: {
      fontSize: theme.typography.pxToRem(lg)
    }
  });

const typography = (theme) => ({
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 34,
    color: theme.palette.heading,
    fontSize: theme.typography.pxToRem(34),
    ...responsiveFontSizes(theme)({ sm: 30, md: 32, lg: 34 })
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 24,
    color: theme.palette.heading,
    fontSize: theme.typography.pxToRem(24),
    ...responsiveFontSizes(theme)({ sm: 20, md: 22, lg: 24 })
  },
  h3: {
    fontWeight: 600,
    lineHeight: 1.5,
    color: theme.palette.heading,
    fontSize: theme.typography.pxToRem(18),
    ...responsiveFontSizes(theme)({ sm: 14, md: 16, lg: 18 })
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.5,
    color: theme.palette.heading,
    fontSize: theme.typography.pxToRem(16),
    ...responsiveFontSizes(theme)({ sm: 12, md: 14, lg: 16 })
  },
  h5: {
    fontWeight: 500,
    color: theme.palette.heading,
    lineHeight: 1.5,
    fontSize: theme.typography.pxToRem(14),
    ...responsiveFontSizes(theme)({ sm: 10, md: 12, lg: 14 })
  },
  h6: {
    fontWeight: 500,
    lineHeight: 28 / 18,
    color: theme.palette.heading,
    fontSize: theme.typography.pxToRem(12),
    ...responsiveFontSizes(theme)({ sm: 8, md: 10, lg: 12 })
  },
  subtitle1: {
    fontWeight: 500,
    color: theme.textDark,
    lineHeight: 1.5,
    fontSize: theme.typography.pxToRem(14)
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 22 / 12,
    color: theme.darkTextSecondary,
    fontSize: theme.typography.pxToRem(12)
  },
  body1: {
    lineHeight: '1.334em',
    fontWeight: 400,
    fontSize: theme.typography.pxToRem(14)
  },
  body2: {
    lineHeight: '1.5em',
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 400,
    letterSpacing: '0em',
    color: theme.darkTextPrimary
  },
  caption: {
    lineHeight: 1.5,
    color: theme.darkTextSecondary,
    fontSize: theme.typography.pxToRem(12)
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: theme.typography.pxToRem(12),
    letterSpacing: 1.1,
    textTransform: 'uppercase'
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: theme.typography.pxToRem(14),
    textTransform: 'capitalize'
  },
  customInput: {
    marginTop: 8,
    marginBottom: 8,
    '& > label': {
      top: '23px',
      left: 0,
      color: theme.palette.grey500,
      '&[data-shrink="false"]': {
        top: '5px'
      }
    },
    '& > div > input': {
      padding: '30.5px 14px 11.5px !important'
    },
    '& legend': {
      display: 'none'
    },
    '& fieldset': {
      top: 0
    }
  },
  mainContent: {
    backgroundColor: theme.palette.background,
    width: '100%',
    minHeight: 'calc(100vh - 88px)',
    flexGrow: 1,
    padding: '20px',
    marginTop: '88px',
    marginRight: '20px',
    borderRadius: `${theme.shape.borderRadius}px`
  },
  menuCaption: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: theme.palette.heading,
    padding: '6px',
    textTransform: 'capitalize',
    marginTop: '10px'
  },
  subMenuCaption: {
    fontSize: '0.6875rem',
    fontWeight: 500,
    color: theme.palette.darkTextSecondary,
    textTransform: 'capitalize'
  },
  commonAvatar: {
    cursor: 'pointer',
    borderRadius: '8px'
  },
  smallAvatar: {
    width: '22px',
    height: '22px',
    fontSize: '1rem'
  },
  mediumAvatar: {
    width: '34px',
    height: '34px',
    fontSize: '1.2rem'
  },
  largeAvatar: {
    width: '44px',
    height: '44px',
    fontSize: '1.5rem'
  }
});

export default typography;
