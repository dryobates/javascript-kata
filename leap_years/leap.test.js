const [isLeap, NotGregorianYear] = require('./leap.js')

// + nie podzielne przez 4 - nie przestępny
// + podzielne przez 4 - przestępny
// + podzielne przez 100 - nie przestępny
// + podzielne przez 400 - przestępny
// - przed 1583 - błąd - brak kalendarza gregoriańskiego
// string lub float - konwersja na int

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
