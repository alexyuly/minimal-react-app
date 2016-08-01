import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import SocialPerson from 'material-ui/svg-icons/social/person';
import { setUiProp } from '../util/store';

class Navbar extends Component {
  static propTypes = {
    brandWidth: PropTypes.number,
    height: PropTypes.number,
    sidebarVisible: PropTypes.bool,
    toggleSidebarVisible: PropTypes.func,
  }
  static mapStateToProps() {
    return {};
  }
  static mapDispatchToProps(dispatch, { sidebarVisible }) {
    return {
      toggleSidebarVisible() {
        dispatch(setUiProp('sidebarVisible', !sidebarVisible));
      },
    };
  }
  render() {
    const { brandWidth, height, toggleSidebarVisible } = this.props;
    return (
      <div
        style={{
          alignItems: 'stretch',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'stretch',
          left: '0px',
          height: `${height}px`,
          position: 'fixed',
          top: '0px',
          width: '100%',
        }}
      >
        <div style={{ flex: `0 ${brandWidth}px` }}>
          <AppBar
            iconElementLeft={
              <IconButton onClick={toggleSidebarVisible}>
                <NavigationMenu color="#ffffff" />
              </IconButton>
            }
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

export default connect(
  Navbar.mapStateToProps,
  Navbar.mapDispatchToProps
)(Navbar);
