import test from 'tape';
import { reducer, addClient, removeClient } from '../../../server/util/store';

test('reducer', (t) => {
  t.plan(2);
  let state = undefined;
  const socket = { id: 'fake' };
  state = reducer(state, addClient(socket));
  t.equal(state.getIn(['clients', socket.id, 'socket']), socket);
  state = reducer(state, removeClient(socket));
  t.equal(state.getIn(['clients', socket.id]), undefined);
});
