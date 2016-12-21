/* eslint-env node, mocha */
'use strict'

var path = require('path')
var tt = require('typescript-definition-tester')

describe('workfront-cookie typings', function() {
    it('should compile examples successfully against workfront-cookie.d.ts', function(done) {
        tt.compileDirectory(
            path.join(__dirname, '/typings-test-fixtures'),
            function(fileName) {
                return fileName.indexOf('.ts') > -1
            },
            done
        )
    })
})
