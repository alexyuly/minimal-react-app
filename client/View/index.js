import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default () => (
  <MuiThemeProvider
    muiTheme={getMuiTheme({
      appBar: {
        height: 50,
      },
    })}
  >
    <div>
      <div
        style={{
          position: 'fixed',
          top: '0px',
          height: '50px',
          width: '100%',
        }}
      >
        <AppBar
          title="Untitled web app"
          titleStyle={{
            fontSize: '18px',
          }}
        />
      </div>
      <div
        style={{
          position: 'fixed',
          top: '50px',
          bottom: '0px',
          width: '100%',
        }}
      >
        &nbsp;
      </div>
    </div>
  </MuiThemeProvider>
);
