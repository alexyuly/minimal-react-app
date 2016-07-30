import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Container from './Container';
import MainContent from './MainContent';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

class App extends Component {
  static brandWidth = 300
  static navbarHeight = 50
  static propTypes = {
    data: PropTypes.object,
  }
  static mapStateToProps(state) {
    return {
      data: state.getIn(['model', 'data']),
    };
  }
  render() {
    const { data } = this.props;
    return (
      <MuiThemeProvider
        muiTheme={getMuiTheme({
          appBar: {
            height: App.navbarHeight,
          },
        })}
      >
        <Container>
          <Navbar brandWidth={App.brandWidth} height={App.navbarHeight} />
          <MainContent>
            <Sidebar data={data} width={App.brandWidth} />
          </MainContent>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default connect(
  App.mapStateToProps
)(App);
