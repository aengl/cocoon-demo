import { snapshotNode, testNode } from '@cocoon/testing';
import test from 'ava';
import { Assert } from './Assert';

test('asserts a true condition', async t => {
  t.snapshot(
    await snapshotNode(Assert, {
      data: { foo: 23 },
      tests: {
        'foo is 23': (assert, x) => assert.strictEqual(x.foo, 23),
      },
    })
  );
});

test('fails for a false condition', async t => {
  await t.throwsAsync(() =>
    testNode(Assert, {
      data: { foo: 23 },
      tests: {
        'foo is 23': (assert, x) => assert.strictEqual(x.foo, 42),
      },
    })
  );
});
