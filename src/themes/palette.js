import { alpha } from '@mui/material/styles';
import colors from '../assets/_scss/_theme-vars.module.scss';

const PRIMARY = {
  light: colors.primaryLight,
  main: colors.primaryMain,
  dark: colors.primaryDark,
  200: colors.primary200,
  800: colors.primary800
};

const COMMON = {
  black: '#000000'
};

const SECONDARY = {
  light: colors.secondaryLight,
  main: colors.secondaryMain,
  dark: colors.secondaryDark,
  200: colors.secondary200,
  800: colors.secondary800
};

const ERROR = {
  light: colors.errorLight,
  main: colors.errorMain,
  dark: colors.errorDark
};

const ORANGE = {
  light: colors.orangeLight,
  main: colors.orangeMain,
  dark: colors.orangeDark
};

const WARNING = {
  light: colors.warningLight,
  main: colors.warningMain,
  dark: colors.warningDark
};

const SUCCESS = {
  light: colors.successLight,
  200: colors.success200,
  main: colors.successMain,
  dark: colors.successDark
};

const GREY = {
  50: colors.grey50,
  100: colors.grey100,
  500: colors.grey500,
  600: colors.grey900,
  700: colors.grey700,
  900: colors.grey900,
  500_8: alpha(`${colors.grey500}`, 0.08),
  500_12: alpha(`${colors.grey500}`, 0.12),
  500_16: alpha(`${colors.grey500}`, 0.16),
  500_24: alpha(`${colors.grey500}`, 0.24),
  500_32: alpha(`${colors.grey500}`, 0.32),
  500_48: alpha(`${colors.grey500}`, 0.48),
  500_56: alpha(`${colors.grey500}`, 0.56),
  500_80: alpha(`${colors.grey500}`, 0.8)
};

const TEXT = {
  primary: colors.grey700,
  secondary: colors.grey500,
  dark: colors.grey900,
  hint: colors.grey100
};

const BACKGROUND = {
  default: colors.paper,
  paper: colors.paper
};

export default {
  heading: colors.grey900,
  paper: colors.paper,
  backgroundDefault: colors.paper,
  darkTextPrimary: colors.grey700,
  darkTextSecondary: colors.grey500,
  textDark: colors.grey900,
  menuSelected: colors.secondaryDark,
  menuSelectedBack: colors.secondaryLight,
  common: {
    ...COMMON
  },
  primary: {
    ...PRIMARY
  },
  secondary: {
    ...SECONDARY
  },
  error: {
    ...ERROR
  },
  orange: {
    ...ORANGE
  },
  warning: {
    ...WARNING
  },
  success: {
    ...SUCCESS
  },
  grey: {
    ...GREY
  },
  text: {
    ...TEXT
  },
  background: {
    ...BACKGROUND
  },
  divider: GREY[500_24],
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};
