import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';

const MERGE_IN_MODEL = 'MERGE_IN_MODEL';
const REMOVE_IN_MODEL = 'REMOVE_IN_MODEL';

export function mergeInModel(path, value) {
  return {
    type: MERGE_IN_MODEL,
    payload: { path, value },
  };
}

export function removeInModel(path) {
  return {
    type: REMOVE_IN_MODEL,
    payload: { path },
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
    case MERGE_IN_MODEL: {
      const { path, value } = payload;
      return state.mergeDeepIn(['model'].concat(path), value);
    }
    case REMOVE_IN_MODEL: {
      const { path } = payload;
      return state.removeIn(['model'].concat(path));
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
