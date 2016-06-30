import React, { PropTypes } from 'react';

const Sidebar = (props) => {
  const { children, width } = props;
  return (
    <div
      style={{
        background: '#eeeeee',
        flex: `0 ${width}px`,
      }}
    >
      {children}
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
};

export default Sidebar;
