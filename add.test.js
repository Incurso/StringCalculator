const add = require('./add')

it('Should return zero on an empty string', () => {
    expect(add('')).toBe(0)
})

it('Should return number', () => {
    expect(add('7')).toBe(7)
})
