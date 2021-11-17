import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1301,
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));
