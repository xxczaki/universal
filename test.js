const test = require('ava');
const fetch = require('.');

test('main', async t => {
	const response = await fetch('https://httpbin.org/json');
	const {slideshow} = await response.json();

	t.is(slideshow.title, 'Sample Slide Show');
});
