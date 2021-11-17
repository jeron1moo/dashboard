import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&>div': {
      position: 'relative',
      zIndex: 5
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '210px',
      height: '210px',
      background: theme.palette.primary[800],
      borderRadius: '50%',
      top: '-85px',
      right: '-95px',
      [theme.breakpoints.down('mobile')]: {
        top: '-105px',
        right: '-140px'
      }
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '210px',
      height: '210px',
      background: theme.palette.primary[800],
      borderRadius: '50%',
      top: '-125px',
      right: '-15px',
      opacity: 0.5,
      zIndex: 1,
      [theme.breakpoints.down('mobile')]: {
        top: '-155px',
        right: '-70px'
      }
    }
  },
  content: {
    padding: '20px !important'
  },
  avatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.largeAvatar,
    backgroundColor: theme.palette.primary[800],
    marginTop: '8px',
    color: '#fff'
  },
  avatarRight: {
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    backgroundColor: theme.palette.primary.dark,
    color: '#fff'
  },
  cardHeading: {
    fontSize: '2.125rem',
    fontWeight: 500,
    marginRight: '8px',
    marginTop: '14px',
    marginBottom: '6px'
  },
  subHeading: {
    fontSize: '1rem',
    fontWeight: 500,
    color: theme.palette.primary[200]
  },
  avatarCircle: {
    cursor: 'pointer',
    backgroundColor: theme.palette.primary[200],
    ...theme.typography.smallAvatar,
    color: theme.palette.primary.dark
  },
  circleIcon: {
    transform: 'rotate3d(1, 1, 1, 45deg)'
  },
  menuItem: {
    marginRight: '14px',
    fontSize: '1.25rem'
  }
}));
