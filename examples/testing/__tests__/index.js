import { testDefinition } from '@cocoon/cocoon';
import test from 'ava';
import path from 'path';

test('runs cocoon.yml', async t => {
  t.snapshot(await testDefinition(path.resolve(__dirname, '../cocoon.yml')));
});
