import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  searchControl: {
    width: '434px',
    marginLeft: '16px',
    paddingRight: '16px',
    paddingLeft: '16px',
    '& input': {
      background: 'transparent !important',
      paddingLeft: '5px !important'
    },
    [theme.breakpoints.down('lg')]: {
      width: '250px'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: '4px',
      background: '#fff'
    }
  },
  startAdornment: {
    fontSize: '1rem',
    color: theme.palette.grey[500]
  },
  headerAvatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    '&:hover': {
      background: theme.palette.secondary.dark,
      color: theme.palette.secondary.light
    }
  },
  closeAvatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    background: theme.palette.orange.light,
    color: theme.palette.orange.dark,
    '&:hover': {
      background: theme.palette.orange.dark,
      color: theme.palette.orange.light
    }
  },
  popperContainer: {
    zIndex: 1100,
    width: '99%',
    top: '-55px !important',
    padding: '0 12px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px'
    }
  },
  cardContent: {
    padding: '12px !important'
  },
  card: {
    background: '#fff',
    [theme.breakpoints.down('sm')]: {
      border: 0,
      boxShadow: 'none'
    }
  }
}));
