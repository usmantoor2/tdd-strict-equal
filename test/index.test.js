const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEquals = require('../index')

describe('Comparison', () => {
  describe('strictEquals', () => {
it('false if both numbers are not equal', () => {
      const checkResult = strictEquals(5, '5')
      expect(checkResult).to.equal(false)
    })
    it('true if both numbers are equal', () => {
      const checkResult = strictEquals(5, 5)
      expect(checkResult).to.equal(true)
    })
    it('false if both numbers are not equal', () => {
      const checkResult = strictEquals(99, 89)
      expect(checkResult).to.equal(false)
    })
    it('false if both numbers are not equal', () => {
      const checkResult = strictEquals(100, 101)
      expect(checkResult).to.equal(false)
    })
  })
})
