import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import client from '../util/client';
import store, { addDatum, removeDatum } from '../util/store';

class Sidebar extends Component {
  static propTypes = {
    data: PropTypes.object,
    visible: PropTypes.boolean,
    width: PropTypes.number,
  }
  getLastDatum() {
    const { data } = this.props;
    return data.max((a, b) => a.get('id') - b.get('id'));
  }
  addDatum() {
    const lastDatum = this.getLastDatum();
    const nextDatumId = lastDatum ? lastDatum.get('id') + 1 : 1;
    const action = addDatum(nextDatumId, `Datum ${nextDatumId}`);
    store.dispatch(action);
    client.dispatch(action);
  }
  removeDatum() {
    const lastDatum = this.getLastDatum();
    if (lastDatum) {
      const action = removeDatum(lastDatum.get('id'));
      store.dispatch(action);
      client.dispatch(action);
    }
  }
  render() {
    const { data, visible, width } = this.props;
    return (
      <div
        style={{
          background: '#eeeeee',
          display: visible ? 'flex' : 'none',
          flex: `0 ${width}px`,
          flexFlow: 'column nowrap',
          justifyContent: 'stretch',
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: '0 auto',
            flexFlow: 'row wrap',
            justifyContent: 'center',
          }}
        >
          <RaisedButton
            primary
            label="Add"
            onClick={() => this.addDatum()}
          />
          <RaisedButton
            secondary
            label="Remove"
            onClick={() => this.removeDatum()}
          />
        </div>
        <List
          style={{
            flex: '1 auto',
            overflow: 'scroll',
          }}
        >
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
