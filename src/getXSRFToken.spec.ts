import { getXSRFToken } from './getXSRFToken'

describe('getXSRFToken', function() {
  afterEach(function() {
    ;['timezone', 'attask', 'XSRF-TOKEN', 'sessionExpiration'].forEach(function(name) {
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    })
  })

  it('should return workfront XSRF token from document.cookie', function() {
    document.cookie = 'timezone=-14400000*-14400000'
    document.cookie = 'XSRF-TOKEN=3f98c9e514ac405a8bc1efb3834356f1'
    document.cookie = 'sessionExpiration=1482407156802'
    const id = getXSRFToken()
    expect(id).toBe('3f98c9e514ac405a8bc1efb3834356f1')
  })

  it('should return undefined if workfront XSRF token is missing from document.cookie', function() {
    document.cookie = 'timezone=-14400000*-14400000'
    document.cookie = 'sessionExpiration=1482407156802'
    const id = getXSRFToken()
    expect(id).toBeUndefined()
  })

  it('should return undefined if workfront XSRF token is present in document.cookie but has empty value', function() {
    document.cookie = 'timezone=-14400000*-14400000'
    document.cookie = 'XSRF-TOKEN='
    document.cookie = 'sessionExpiration=1482407156802'
    const id = getXSRFToken()
    expect(id).toBeUndefined()
  })
})
