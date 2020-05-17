# Node Fetch Universal

> Switches between node-fetch on server and built-in fetch in the browser.

## Install

Node Fetch >=3.0.0-beta.5 is required.

```sh
$ npm install @node-fetch/universal node-fetch
```

## Usage

```js
// CommonJS
const fetch = require('@node-fetch/universal');

// ES Module
import fetch from '@node-fetch/universal';
```

That's it - now, whenever you make a request, either the built-in fetch or the node-fetch package will be used.

### License

MIT
