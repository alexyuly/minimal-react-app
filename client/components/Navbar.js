import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import SocialPerson from 'material-ui/svg-icons/social/person';

class Navbar extends Component {
  static propTypes = {
    brandWidth: PropTypes.number,
    height: PropTypes.number,
  };
  render() {
    const { brandWidth, height } = this.props;
    return (
      <div
        style={{
          alignItems: 'stretch',
          display: 'flex',
          flex: `0 ${height}px`,
          flexFlow: 'row nowrap',
          justifyContent: 'stretch',
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
  }
}

export default Navbar;
