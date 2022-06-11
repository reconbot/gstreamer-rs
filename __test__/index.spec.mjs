import test from 'ava'

import { sum, reverse } from '../index.js'

test('sum from native', (t) => {
  t.is(sum(1, 2), 3)
})

test('reverse does', t => {
  t.is(reverse("hi"), "ih")
})
