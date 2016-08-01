import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

class App extends Component {
  static brandWidth = 300
  static navbarHeight = 50
  static propTypes = {
    data: PropTypes.object,
    sidebarVisible: PropTypes.bool,
  }
  static mapStateToProps(state) {
    return {
      data: state.getIn(['model', 'data']),
      sidebarVisible: state.getIn(['ui', 'sidebarVisible']),
    };
  }
  render() {
    const { data, sidebarVisible } = this.props;
    return (
      <MuiThemeProvider
        muiTheme={getMuiTheme({
          appBar: {
            height: App.navbarHeight,
          },
        })}
      >
        <div>
          <Navbar
            brandWidth={App.brandWidth}
            height={App.navbarHeight}
            sidebarVisible={sidebarVisible}
          />
          <Sidebar
            data={data}
            top={App.navbarHeight}
            visible={sidebarVisible}
            width={App.brandWidth}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(
  App.mapStateToProps
)(App);
