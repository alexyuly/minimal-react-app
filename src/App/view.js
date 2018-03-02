import { compose, withProps } from 'recompose';
import { withStyles } from 'material-ui/styles';
import component from './component';
import styles from './styles';

const App = compose(
  withProps({ message: 'Hello, world!' }),
  withStyles(styles),
)(component);

export default App;
