import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';

const ADD_CLIENT = 'ADD_CLIENT';
const REMOVE_CLIENT = 'REMOVE_CLIENT';
const MERGE_IN_MODEL = 'MERGE_IN_MODEL';

export function addClient(socket) {
  return {
    type: ADD_CLIENT,
    payload: { socket },
  };
}

export function removeClient(socket) {
  return {
    type: REMOVE_CLIENT,
    payload: { socket },
  };
}

export function mergeInModel(value, path = []) {
  return {
    type: MERGE_IN_MODEL,
    payload: { path, value },
  };
}

const initialState = Immutable.fromJS({
  clients: {},
});

export function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CLIENT: {
      const { socket } = payload;
      return state.setIn(['clients', socket.id, 'socket'], socket);
    }
    case REMOVE_CLIENT: {
      const { socket } = payload;
      return state.removeIn(['clients', socket.id]);
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
