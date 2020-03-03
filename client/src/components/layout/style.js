import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff'
  },
  toolbar: {
    backgroundColor: theme.palette.primary.main
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#ffffff'
  },
  title: {
    flexGrow: 1,
    color: '#ffffff'
  }
});

export default makeStyles(styles(theme));
