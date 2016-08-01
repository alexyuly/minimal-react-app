import React, { Component, PropTypes } from 'react';

class MainContent extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    return (
      <div
        style={{
          alignItems: 'stretch',
          display: 'flex',
          flex: '1 auto',
          flexFlow: 'row nowrap',
          justifyContent: 'stretch',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default MainContent;
