import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  scrollHeight: {
    height: '100%',
    maxHeight: 'calc(100vh - 205px',
    overflowX: 'hidden'
  },
  headerAvatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    transition: 'all .2s ease-in-out',
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    '&[aria-controls="menu-list-grow"],&:hover': {
      background: theme.palette.secondary.dark,
      color: theme.palette.secondary.light
    }
  },
  cardContent: {
    padding: '0px !important'
  },
  notificationChip: {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.warning.dark
  },
  divider: {
    marginTop: 0,
    marginBottom: 0
  },
  cardAction: {
    padding: '10px',
    justifyContent: 'center'
  },
  paddingBottom: {
    paddingBottom: '16px'
  },
  box: {
    marginLeft: '16px',
    marginRight: '24px',
    [theme.breakpoints.down('mobile')]: {
      marginRight: '16px'
    }
  },
  bodyPPacing: {
    padding: '16px 16px 0'
  },
  textBoxSpacing: {
    padding: '0px 16px'
  },
  navContainer: {
    width: '100%',
    maxWidth: '330px',
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: '10px',
    [theme.breakpoints.down.sm]: {
      maxWidth: '300px'
    }
  },
  listAction: {
    top: '22px'
  },
  actionColor: {
    color: theme.palette.grey[500]
  },
  listItem: {
    padding: 0
  },
  sendIcon: {
    marginLeft: '8px',
    marginTop: '-3px'
  },
  listDivider: {
    marginTop: 0,
    marginBottom: 0
  },
  listChipError: {
    color: theme.palette.orange.dark,
    backgroundColor: theme.palette.orange.light,
    height: '24px',
    padding: '0 6px',
    marginRight: '5px'
  },
  listChipSuccess: {
    color: theme.palette.success.dark,
    backgroundColor: theme.palette.success.light,
    height: '24px',
    padding: '0 6px'
  }
}));
