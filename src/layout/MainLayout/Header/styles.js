import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  headerAvatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    transition: 'all .2s ease-in-out',
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    '&:hover': {
      background: theme.palette.secondary.dark,
      color: theme.palette.secondary.light
    }
  },
  boxCotainer: {
    width: '228px',
    display: 'flex',
    [theme.breakpoints.down('tablet')]: {
      width: 'auto'
    }
  }
}));
