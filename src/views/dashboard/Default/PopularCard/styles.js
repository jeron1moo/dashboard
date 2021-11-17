import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  cardAction: {
    padding: '10px',
    paddingTop: 0,
    justifyContent: 'center'
  },
  primaryLight: {
    color: theme.palette.primary[200],
    cursor: 'pointer'
  },
  divider: {
    margin: '12px 0'
  },
  avatarSuccess: {
    width: '16px',
    height: '16px',
    borderRadius: '5px',
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.dark,
    marginLeft: '15px'
  },
  successDark: {
    color: theme.palette.success.dark
  },
  avatarError: {
    width: '16px',
    height: '16px',
    borderRadius: '5px',
    backgroundColor: theme.palette.orange.light,
    color: theme.palette.orange.dark,
    marginLeft: '15px'
  },
  errorDark: {
    color: theme.palette.orange.dark
  }
}));
