import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';

const ADD_DATUM = 'ADD_DATUM';
const REMOVE_DATUM = 'REMOVE_DATUM';
const SET_DATA = 'SET_DATA';

export function addDatum(id, content) {
  return {
    type: ADD_DATUM,
    payload: { id, content },
  };
}

export function removeDatum(id) {
  return {
    type: REMOVE_DATUM,
    payload: { id },
  };
}

const initialState = Immutable.fromJS({
  model: {
    data: [],
  },
});

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_DATUM: {
      const datum = Immutable.fromJS(payload);
      return state.updateIn(['model', 'data'], data => data.push(datum));
    }
    case REMOVE_DATUM: {
      const index = state.getIn(['model', 'data']).findIndex(datum => datum.id === payload.id);
      return state.updateIn(['model', 'data'], data => data.remove(index));
    }
    case SET_DATA: {
      const data = Immutable.fromJS(payload.data);
      return state.setIn(['model', 'data'], data);
    }
    default: {
      return state;
    }
  }
}

const middleware = [];
if (process.env.NODE_ENV === 'debug') {
  middleware.push(createLogger({
    stateTransformer: state => state.toJS(),
  }));
}

const store = createStore(reducer, applyMiddleware(...middleware));
export default store;
