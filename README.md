V Tabs Router
---

[![npm](https://img.shields.io/npm/v/v-tabs-router.svg)](https://www.npmjs.com/package/v-tabs-router) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A vue.js mobile tabs based on vue-router Edit

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

### Usage in *.vue* template (Webpack)

```html
<tabs>
  <tab name="home" path="/home" icon="fa-home"></tab>
  <tab name="list" path="/list" icon="fa-list"></tab>
  <tab name="account" path="/account" icon="fa-user"></tab>
  <tab name="about" path="/about" icon="fa-exclamation"></tab>
</tabs>
<script>

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-tabs-router/dist/v-tabs-router.css'

import { Tabs, Tab } from 'v-tabs-router'

export default {
  components: { Tabs, Tab }
}
</script>
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
