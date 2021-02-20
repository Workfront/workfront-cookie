import { COOKIE_NAME, getSessionID, getXSRFToken } from './index'

describe('workfront-cookie', function () {
  it('should export getSessionID function', function () {
    expect(typeof getSessionID).toBe('function')
  })

  it('should export getXSRFToken function', function () {
    expect(typeof getXSRFToken).toBe('function')
  })

  it('should export COOKIE_NAME constant', function () {
    expect(typeof COOKIE_NAME).toBe('string')
  })
})
