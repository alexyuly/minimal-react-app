import { compose, withProps } from 'recompose';
import { withStyles } from 'material-ui/styles';
import component from './component';
import styles from './styles';

const App = compose(
  withProps({ message: process.env.MESSAGE }),
  withStyles(styles),
)(component);

export default App;
