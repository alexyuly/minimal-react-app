import React, { Component, PropTypes } from 'react';

class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  render() {
    return (
      <div
        style={{
          alignItems: 'stretch',
          bottom: '0px',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'stretch',
          left: '0px',
          position: 'fixed',
          right: '0px',
          top: '0px',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Container;
