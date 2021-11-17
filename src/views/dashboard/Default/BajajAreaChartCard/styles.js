import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.secondary.light
  },
  content: {
    padding: '0px !important'
  },
  contentContainer: {
    padding: '16px',
    paddingBottom: 0,
    color: '#fff'
  },
  fontStyle: {
    fontWeight: 400
  },
  title: {
    color: theme.palette.secondary.dark
  },
  cost: {
    color: theme.palette.grey[800]
  },
  profit: {
    color: theme.palette.grey[800]
  }
}));
