import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Container from './Container';
import MainContent from './MainContent';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const View = (props) => {
  const { brandWidth, navbarHeight } = props;
  return (
    <MuiThemeProvider
      muiTheme={getMuiTheme({
        appBar: {
          height: navbarHeight,
        },
      })}
    >
      <Container>
        <Navbar
          brandWidth={brandWidth}
          height={navbarHeight}
        />
        <MainContent>
          <Sidebar width={brandWidth} />
        </MainContent>
      </Container>
    </MuiThemeProvider>
  );
};

View.propTypes = {
  brandWidth: PropTypes.number,
  navbarHeight: PropTypes.number,
};

export default View;
