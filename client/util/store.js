import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';

const ADD_DATUM = 'ADD_DATUM';
const REMOVE_DATUM = 'REMOVE_DATUM';
const SET_DATA = 'SET_DATA';
const SET_UI_PROP = 'SET_UI_PROP';

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

export function setUiProp(prop, value) {
  return {
    type: SET_UI_PROP,
    payload: { prop, value },
  };
}

const initialState = Immutable.fromJS({
  model: {
    data: [],
  },
  ui: {
    sidebarVisible: true,
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
    case SET_UI_PROP: {
      return state.setIn(['ui', payload.prop], payload.value);
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
