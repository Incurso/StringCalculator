const add = require('./add')

it('Should return zero on an empty string', () => {
  expect(add('')).toBe(0)
})

it('Should return seven', () => {
  expect(add('7')).toBe(7)
})

it('Should return five', () => {
  expect(add('2,3')).toBe(5)
})
