/**
 * Copyright 2016 Workfront
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* globals document */
var COOKIE_NAME = require('./cookieName')

function getSessionID() {
    console.log('match=', document.cookie) // eslint-disable-line
    var match = document.cookie.match(new RegExp('(^|;\\s*)(' + COOKIE_NAME + ')=([^;]*)')),
        cookie
    if (match) {
        cookie = decodeURIComponent(match[3])
        if (cookie) {
            return cookie.split('#')[0]
        }
    }
}

module.exports = getSessionID
