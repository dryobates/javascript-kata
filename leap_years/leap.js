const FIRST_GREGORIAN_YEAR = 1583

class Year {
  constructor (year) {
    this.year = year
  }
  isLeap () {
    if (this.year < FIRST_GREGORIAN_YEAR) {
      throw new NotGregorianYear('Before october 1582 there was no gregorian calendar. Given year: ' + this.year)
    }
    if ((this.year % 400) === 0) {
      return true
    }
    if ((this.year % 100) === 0) {
      return false
    }
    return ((this.year % 4) === 0)
  }
}

function NotGregorianYear (message) {
  this.message = message
}

module.exports = [Year, NotGregorianYear]
