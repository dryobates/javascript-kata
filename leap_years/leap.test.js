const [isLeap, NotGregorianYear] = require('./leap.js')

test('is not leap when not divisible by 4', () => {
  expect(isLeap(2001)).toBe(false)
})

test('is leap when divisible by 4', () => {
  expect(isLeap(2004)).toBe(true)
})

test('is not leap when divisible by 100', () => {
  expect(isLeap(1900)).toBe(false)
})

test('is leap when divisible by 400', () => {
  expect(isLeap(2000)).toBe(true)
})

test('raises not gregorian year when before 1583', () => {
  expect(() => { isLeap(1500) }).toThrow(NotGregorianYear)
})

test('converts to int when float', () => {
  expect(isLeap(2004.0)).toBe(true)
})

test('converts to int when string', () => {
  expect(isLeap('2004')).toBe(true)
})
