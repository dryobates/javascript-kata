const FIRST_GREGORIAN_YEAR = 1583

function isLeap (year) {
  if (year < FIRST_GREGORIAN_YEAR) {
    throw new NotGregorianYear('Before october 1582 there was no gregorian calendar. Given year: ' + year)
  }
  if ((year % 400) === 0) {
    return true
  }
  if ((year % 100) === 0) {
    return false
  }
  return ((year % 4) === 0)
}

function NotGregorianYear (message) {
  this.message = message
}
module.exports = [isLeap, NotGregorianYear]
