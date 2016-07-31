import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';

const MERGE_IN_MODEL = 'MERGE_IN_MODEL';

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
