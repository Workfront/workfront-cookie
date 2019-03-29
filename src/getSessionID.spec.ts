import { getSessionID } from './getSessionID'

describe('getSessionID', function() {
  afterEach(function() {
    ;['timezone', 'attask', 'XSRF-TOKEN', 'sessionExpiration'].forEach(function(name) {
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    })
  })

  it('should return workfront session id from document.cookie', function() {
    document.cookie = 'timezone=-14400000*-14400000'
    document.cookie =
      'attask=3f98c9e514ac405a8bc1efb3834356f1%23WzMcPknWNsexAVD%252FPZWBXCyQ8J635hEAgwNQ3g4fDxc%253D'
    document.cookie = 'sessionExpiration=1482407156802'
    const id = getSessionID()
    expect(id).toBe('3f98c9e514ac405a8bc1efb3834356f1')
  })

  it('should return undefined if workfront session id is missing from document.cookie', function() {
    document.cookie = 'timezone=-14400000*-14400000'
    document.cookie = 'sessionExpiration=1482407156802'
    const id = getSessionID()
    expect(id).toBeUndefined()
  })

  it('should return undefined if workfront session id is present in document.cookie but has empty value', function() {
    document.cookie = 'timezone=-14400000*-14400000'
    document.cookie = 'attask='
    document.cookie = 'sessionExpiration=1482407156802'
    const id = getSessionID()
    expect(id).toBeUndefined()
  })
})
