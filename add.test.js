const add = require('./add')

/* Step 1 */
it('Should return zero on an empty string', () => {
  expect(add('')).toBe(0)
})

it('Should return seven', () => {
  expect(add('7')).toBe(7)
})

it('Should return five', () => {
  expect(add('2,3')).toBe(5)
})

/* Step 2 */
it('Should return six', () => {
  expect(add('1,2,3')).toBe(6)
})

it('Should return forty five', () => {
  expect(add('1,2,3,4,5,6,7,8,9')).toBe(45)
})

/* Step 3 */
it('Should return six', () => {
  expect(add('1\n2,3')).toBe(6)
})

it('Should return six', () => {
  expect(add('1\n2\n3')).toBe(6)
})
