const FIRST_GREGORIAN_YEAR = 1583

function isLeap (number) {
  if (number < FIRST_GREGORIAN_YEAR) {
    throw new NotGregorianYear('Before october 1582 there was no gregorian calendar. Given year: ' + number)
  }
  if ((number % 400) === 0) {
    return true
  }
  if ((number % 100) === 0) {
    return false
  }
  return ((number % 4) === 0)
}

function NotGregorianYear (message) {
  this.message = message
}
module.exports = [isLeap, NotGregorianYear]
