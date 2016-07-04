import React, { PropTypes } from 'react';

const Container = (props) => (
  <div
    style={{
      position: 'fixed',
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px',
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'stretch',
      alignItems: 'stretch',
    }}
  >
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
