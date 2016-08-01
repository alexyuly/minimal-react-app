import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import client from '../util/client';
import store, { addDatum, removeDatum } from '../util/store';

class Sidebar extends Component {
  static propTypes = {
    data: PropTypes.object,
    top: PropTypes.number,
    visible: PropTypes.bool,
    width: PropTypes.number,
  }
  static removeDatum(id) {
    const action = removeDatum(id);
    store.dispatch(action);
    client.dispatch(action);
  }
  addNextDatum() {
    const { data } = this.props;
    const lastDatum = data.max((a, b) => a.get('id') - b.get('id'));
    const nextDatumId = lastDatum ? lastDatum.get('id') + 1 : 1;
    const action = addDatum(nextDatumId, `Datum ${nextDatumId}`);
    store.dispatch(action);
    client.dispatch(action);
  }
  render() {
    const { data, top, visible, width } = this.props;
    return (
      <Paper
        style={{
          alignItems: 'stretch',
          bottom: '0px',
          display: visible ? 'flex' : 'none',
          flexFlow: 'column nowrap',
          justifyContent: 'stretch',
          left: '0px',
          position: 'fixed',
          top: `${top}px`,
          width: `${width}px`,
        }}
        zDepth={2}
      >
        <List
          style={{
            flex: 'auto',
            overflow: 'scroll',
          }}
        >
          <ListItem
            primaryText="Add one"
            onClick={() => this.addNextDatum()}
          />
          {
            data.toJS().map(datum =>
              <ListItem
                key={datum.id}
                primaryText={datum.content}
                onClick={() => Sidebar.removeDatum(datum.id)}
              />
            )
          }
        </List>
      </Paper>
    );
  }
}

export default Sidebar;
