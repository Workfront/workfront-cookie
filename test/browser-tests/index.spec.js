/* eslint-env mocha, browser */
'use strict'

var expect = require('expect.js')

var WorkfrontCookie = require('../../index')


describe('workfront-cookie', function() {
    it('should export getSessionID function', function() {
        expect(WorkfrontCookie.getSessionID).to.be.a(Function)
    })

    it('should export getXSRFToken function', function() {
        expect(WorkfrontCookie.getXSRFToken).to.be.a(Function)
    })

    it('should export COOKIE_NAME constant', function() {
        expect(typeof WorkfrontCookie.COOKIE_NAME).to.be('string')
    })

    afterEach(function () {
        ['timezone', 'attask', 'XSRF-TOKEN', 'sessionExpiration'].forEach(function(name) {
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        })
    })

    describe('getSessionID', function() {
        it('should return workfront session id from document.cookie', function() {
            document.cookie = 'timezone=-14400000*-14400000'
            document.cookie = 'attask=3f98c9e514ac405a8bc1efb3834356f1%23WzMcPknWNsexAVD%252FPZWBXCyQ8J635hEAgwNQ3g4fDxc%253D'
            document.cookie = 'sessionExpiration=1482407156802'
            var id = WorkfrontCookie.getSessionID()
            expect(id).to.be('3f98c9e514ac405a8bc1efb3834356f1')
        })

        it('should return undefined if workfront session id is missing from document.cookie', function() {
            document.cookie = 'timezone=-14400000*-14400000'
            document.cookie = 'sessionExpiration=1482407156802'
            var id = WorkfrontCookie.getSessionID()
            expect(id).to.be(undefined)
        })

        it('should return undefined if workfront session id is present in document.cookie but has empty value', function() {
            document.cookie = 'timezone=-14400000*-14400000'
            document.cookie = 'attask='
            document.cookie = 'sessionExpiration=1482407156802'
            var id = WorkfrontCookie.getSessionID()
            expect(id).to.be(undefined)
        })
    })

    describe('getXSRFToken', function() {
        it('should return workfront XSRF token from document.cookie', function() {
            document.cookie = 'timezone=-14400000*-14400000'
            document.cookie = 'XSRF-TOKEN=3f98c9e514ac405a8bc1efb3834356f1'
            document.cookie = 'sessionExpiration=1482407156802'
            var id = WorkfrontCookie.getXSRFToken()
            expect(id).to.be('3f98c9e514ac405a8bc1efb3834356f1')
        })

        it('should return undefined if workfront XSRF token is missing from document.cookie', function() {
            document.cookie = 'timezone=-14400000*-14400000'
            document.cookie = 'sessionExpiration=1482407156802'
            var id = WorkfrontCookie.getXSRFToken()
            expect(id).to.be(undefined)
        })

        it('should return undefined if workfront XSRF token is present in document.cookie but has empty value', function() {
            document.cookie = 'timezone=-14400000*-14400000'
            document.cookie = 'XSRF-TOKEN='
            document.cookie = 'sessionExpiration=1482407156802'
            var id = WorkfrontCookie.getXSRFToken()
            expect(id).to.be(undefined)
        })
    })
})
