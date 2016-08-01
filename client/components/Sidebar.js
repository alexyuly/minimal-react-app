import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import server from '../util/server';
import store, { addDatum, removeDatum } from '../util/store';

class Sidebar extends Component {
  static propTypes = {
    data: PropTypes.object,
    width: PropTypes.number,
  }
  addDatum() {
    const { data } = this.props;
    const lastDatum = data.max((a, b) => a.get('id') - b.get('id'));
    const nextDatumId = (lastDatum ? lastDatum.get('id') : 0) + 1;
    const action = addDatum(nextDatumId, `Datum ${nextDatumId}`);
    store.dispatch(action);
    server.dispatch(action);
  }
  removeDatum() {
    const { data } = this.props;
    const lastDatum = data.max((a, b) => a.get('id') - b.get('id'));
    if (lastDatum) {
      const action = removeDatum(lastDatum.get('id'));
      store.dispatch(action);
      server.dispatch(action);
    }
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
        <RaisedButton label="Add" primary onClick={() => this.addDatum()} />
        <RaisedButton label="Remove" secondary onClick={() => this.removeDatum()} />
        <List>
          {
            data.toJS().map(datum =>
              <ListItem key={datum.id} primaryText={datum.content} />
            )
          }
        </List>
      </div>
    );
  }
}

export default Sidebar;
