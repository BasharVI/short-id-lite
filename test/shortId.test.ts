import test from 'node:test';
import assert from 'node:assert/strict';
import { shortId } from '../dist/index.js';

test('default length', () => {
  const id = shortId();
  assert.equal(id.length, 6);
});

test('custom length', () => {
  const id = shortId(10);
  assert.equal(id.length, 10);
});

test('uniqueness (basic)', () => {
  const seen = new Set<string>();
  for (let i = 0; i < 1000; i++) seen.add(shortId());
  assert.equal(seen.size, 1000);
});

test('invalid input', () => {
  assert.throws(() => shortId(2), RangeError);
  assert.throws(() => shortId(33), RangeError);
  assert.throws(() => shortId(4.5 as unknown as number), TypeError);
});
