import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Container from '../Container';
import MainContent from '../MainContent';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const App = (props) => {
  const { brandWidth, navbarHeight } = App;
  const { dataCollection } = props;
  return (
    <MuiThemeProvider
      muiTheme={getMuiTheme({
        appBar: {
          height: navbarHeight,
        },
      })}
    >
      <Container>
        <Navbar brandWidth={brandWidth} height={navbarHeight} />
        <MainContent>
          <Sidebar dataCollection={dataCollection} width={brandWidth} />
        </MainContent>
      </Container>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  dataCollection: PropTypes.object,
};

App.brandWidth = 300;
App.navbarHeight = 50;

export default Relay.createContainer(App, {
  fragments: {
    dataCollection: () => Relay.QL`
      fragment on DataCollection {
        dataPoints(first: 10) {
          edges {
            node {
              id
              data
            }
          }
        }
      }
    `,
  },
});
