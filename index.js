'use strict';

const fetch = require('node-fetch');

if (!global.fetch) {
	global.fetch = fetch;
}

if (!global.Headers) {
	global.Headers = fetch.Headers;
}

if (!global.Request) {
	global.Request = fetch.Request;
}

if (!global.Response) {
	global.Response = fetch.Response;
}

module.exports = fetch;
