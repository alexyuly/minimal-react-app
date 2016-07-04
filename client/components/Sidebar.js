import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';

const Sidebar = (props) => {
  const { dataCollection, width } = props;
  return (
    <div
      style={{
        background: '#eeeeee',
        flex: `0 ${width}px`,
      }}
    >
      <List>
        {
          dataCollection.dataPoints.edges.map(x => (
            <ListItem key={x.node.id} primaryText={x.node.data} />
          ))
        }
      </List>
    </div>
  );
};

Sidebar.propTypes = {
  dataCollection: PropTypes.object,
  width: PropTypes.number,
};

export default Sidebar;
