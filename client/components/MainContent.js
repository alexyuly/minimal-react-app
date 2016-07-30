import React, { Component, PropTypes } from 'react';

class MainContent extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  render() {
    return (
      <div
        style={{
          flex: '1 auto',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'stretch',
          alignItems: 'stretch',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default MainContent;
