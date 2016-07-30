import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';

class Sidebar extends Component {
  static propTypes = {
    data: PropTypes.object,
    width: PropTypes.number,
  }
  render() {
    const { data, width } = this.props;
    return (
      <div
        style={{
          background: '#eeeeee',
          flex: `0 ${width}px`,
        }}
      >
        <List>
          {
            data.toJS().map(datum => (
              <ListItem key={datum.id} primaryText={datum.content} />
            ))
          }
        </List>
      </div>
    );
  }
}

export default Sidebar;
