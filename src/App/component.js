import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';

const App = ({
  classes,
  message,
  theme,
}) => (
  <MuiThemeProvider
    theme={theme}
  >
    <div
      className={classes.root}
    >
      <AppBar
        position="static"
        color="default"
      >
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
          >
            {message}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  theme: PropTypes.object,
};

App.defaultProps = {
  theme: createMuiTheme(),
};

export default App;
