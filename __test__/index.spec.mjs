import test from 'ava'

import { fuckyea, reverse, sum } from '../index.js'

test('sum from native', (t) => {
  t.is(sum(1, 2), 3)
})

test('reverse from native', (t) => {
  t.is(reverse("hi"), "ih")
})

test('fuck yea', (t) => {
  fuckyea()
  t.pass()
})
