const [Year, NotGregorianYear] = require('./leap.js')

test('is not leap when not divisible by 4', () => {
  expect(new Year(2001).isLeap()).toBe(false)
})

test('is leap when divisible by 4', () => {
  expect(new Year(2004).isLeap()).toBe(true)
})

test('is not leap when divisible by 100', () => {
  expect(new Year(1900).isLeap()).toBe(false)
})

test('is leap when divisible by 400', () => {
  expect(new Year(2000).isLeap()).toBe(true)
})

test('raises not gregorian year when before 1583', () => {
  expect(() => { new Year(1500).isLeap() }).toThrow(NotGregorianYear)
})

test('converts to int when float', () => {
  expect(new Year(2004.0).isLeap()).toBe(true)
})

test('converts to int when string', () => {
  expect(new Year('2004').isLeap()).toBe(true)
})

test('is not leap when not divisible by 4', () => {
  expect(new Year(2001).isLeap()).toBe(false)
})
