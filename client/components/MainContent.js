import React, { PropTypes } from 'react';

const MainContent = (props) => (
  <div
    style={{
      flex: '1 auto',
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'stretch',
      alignItems: 'stretch',
    }}
  >
    {props.children}
  </div>
);

MainContent.propTypes = {
  children: PropTypes.node,
};

export default MainContent;
