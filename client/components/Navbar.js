import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import SocialPerson from 'material-ui/svg-icons/social/person';

const Navbar = (props) => {
  const { brandWidth, height } = props;
  return (
    <div
      style={{
        flex: `0 ${height}px`,
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'stretch',
        alignItems: 'stretch',
      }}
    >
      <div style={{ flex: `0 ${brandWidth}px` }}>
        <AppBar
          iconElementRight={
            <IconButton>
              <NavigationMenu color="#ffffff" />
            </IconButton>
          }
          showMenuIconButton={false}
          style={{ paddingLeft: '16px', paddingRight: '16px' }}
          title="Untitled web app"
          titleStyle={{ fontSize: '16px' }}
        />
      </div>
      <div style={{ flex: '1 auto' }}>
        <AppBar
          iconElementRight={
            <IconButton>
              <SocialPerson color="#ffffff" />
            </IconButton>
          }
          showMenuIconButton={false}
          style={{ paddingLeft: '16px', paddingRight: '16px' }}
          title="Something could go here"
          titleStyle={{ fontSize: '16px' }}
        />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  brandWidth: PropTypes.number,
  height: PropTypes.number,
};

export default Navbar;
