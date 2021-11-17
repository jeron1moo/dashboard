import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  navContainer: {
    width: '100%',
    maxWidth: '350px',
    minWidth: '300px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    [theme.breakpoints.down('mobile')]: {
      minWidth: '100%'
    }
  },
  headerAvatar: {
    cursor: 'pointer',
    ...theme.typography.mediumAvatar,
    margin: '8px 0 8px 8px !important'
  },
  profileChip: {
    height: '48px',
    alignItems: 'center',
    borderRadius: '27px',
    transition: 'all .2s ease-in-out',
    borderColor: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.light,
    '&[aria-controls="menu-list-grow"], &:hover': {
      borderColor: theme.palette.primary.main,
      background: `${theme.palette.primary.main}!important`,
      color: theme.palette.primary.light,
      '& svg': {
        stroke: theme.palette.primary.light
      }
    }
  },
  profileLabel: {
    lineHeight: 0,
    padding: '12px'
  },
  listItem: {
    marginTop: '5px'
  },
  cardContent: {
    padding: '16px !important'
  },
  card: {
    backgroundColor: theme.palette.primary.light,
    marginBottom: '16px',
    marginTop: '16px'
  },
  searchControl: {
    width: '100%',
    paddingRight: '8px',
    paddingLeft: '16px',
    marginBottom: '16px',
    marginTop: '16px'
  },
  startAdorment: {
    fontSize: '1rem',
    color: theme.palette.grey[500]
  },
  flex: {
    display: 'flex'
  },
  name: {
    marginLeft: '2px',
    fontWeight: 400
  },
  scrollHeight: {
    height: '100%',
    maxHeight: 'calc(100vh - 250px',
    overflowX: 'hidden'
  },
  badgeWarning: {
    backgroundColor: theme.palette.warning.dark,
    color: '#fff'
  }
}));
