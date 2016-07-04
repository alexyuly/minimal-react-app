import test from 'tape';
import AppEventEmitter from '../../../server/util/AppEventEmitter';

test('AppEventEmitter', t => {
  t.plan(1);
  const timeout = 1000;
  const failure = setTimeout(() => t.fail(), timeout + 1000);
  const events = new AppEventEmitter();
  events.on('test', () => {
    t.pass();
    clearTimeout(failure);
  });
  events.remit({ timeout }, 'test');
});
