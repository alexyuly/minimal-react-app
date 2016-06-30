import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import Container from './Container';
import MainContent from './MainContent';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const View = (props) => {
  const { brandWidth, dataCollection, navbarHeight } = props;
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
          <Sidebar width={brandWidth}>
            <List>
              {
                dataCollection.dataPoints.edges.map(x => (
                  <ListItem key={x.node.id} primaryText={x.node.data} />
                ))
              }
            </List>
          </Sidebar>
        </MainContent>
      </Container>
    </MuiThemeProvider>
  );
};

View.propTypes = {
  brandWidth: PropTypes.number,
  dataCollection: PropTypes.object,
  navbarHeight: PropTypes.number,
};

export default View;
