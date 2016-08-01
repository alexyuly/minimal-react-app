import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';

const ADD_DATUM = 'ADD_DATUM';
const REMOVE_DATUM = 'REMOVE_DATUM';
const SET_DATA = 'SET_DATA';

export function setData(data) {
  return {
    type: SET_DATA,
    payload: { data },
  };
}

const initialState = Immutable.fromJS({
  data: [
    {
      id: 1,
      content: 'Datum 1',
    },
    {
      id: 2,
      content: 'Datum 2',
    },
    {
      id: 3,
      content: 'Datum 3',
    },
  ],
});

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_DATUM: {
      const datum = Immutable.fromJS(payload);
      return state.update('data', data => data.push(datum));
    }
    case REMOVE_DATUM: {
      const index = state.get('data').findIndex(datum => datum.id === payload.id);
      return state.update('data', data => data.remove(index));
    }
    case SET_DATA: {
      const data = Immutable.fromJS(payload.data);
      return state.set('data', data);
    }
    default: {
      return state;
    }
  }
}

const middleware = [];
if (process.env.npm_lifecycle_event === 'debug') {
  middleware.push(createLogger({
    stateTransformer: state => state.toJS(),
    colors: false,
  }));
}

const dataSource = createStore(reducer, applyMiddleware(...middleware));
export default dataSource;
