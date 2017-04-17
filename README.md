VTab
---

[![npm](https://img.shields.io/npm/v/v-tabs-router.svg)](https://www.npmjs.com/package/v-tabs-router) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A Vue.js Plugin

Installation
------------

```bash
npm install --save v-tabs-router
yarn add v-tabs-router
```

![](https://github.com/dflourusso/v-tabs-router/blob/master/print.png)

Reference-style:
Usage
-----

### Bundler (Webpack, Rollup)

```js
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-tabs-router/dist/v-tabs-router.css'

import { Tabs, Tab } from 'v-tabs-router'

export default {
  components: { Tabs, Tab }
}
```

Development
-----------

### Build

Bundle the js and css of to the `dist` folder:

```bash
yarn build
# or
bin/build
```

### Dist

Bundle the js and css min of to the `dist` folder:

```bash
yarn dist
# or
bin/dist
```

### Release

Bundle aliases for build and dist

```bash
yarn release
```

### Publish

`bin/publish`

```bash
bin/publish
```

### Author

[Daniel Fernando Lourusso](http://dflourusso.com.br)

License
-------

[MIT](http://opensource.org/licenses/MIT)
