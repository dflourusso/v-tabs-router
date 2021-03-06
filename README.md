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

### Usage in *.vue* template (Webpack)

```html
<tabs color='light-blue'>
  <tab name="home" to="{name: 'home'}" icon="fa fa-lg fa-home"></tab>
  <tab name="list" to="{name: 'list'}" icon="fa fa-lg fa-list" label="Tickets"></tab>
  <tab name="account" to="{name: 'account'}" icon="fa fa-lg fa-user"></tab>
  <tab name="about" to="{name: 'about'}" icon="fa fa-lg fa-exclamation"></tab>
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

Tabs properties

 - **color:** *optional* - Tab icons colors
 - **background-color:** *optional* - Tabs background

Tab properties

 - **name:** *required* - Name of the tab. Needs be unique
 - **to:** *required* - Route to go when click
 - **icon:** *required* - Font icon to the tab, can be *font-awesome* or another font project. For example: 'fa fa-home'
 - **label:** *optional* - Label appears under the icon if present
 - **exact:** *optional* - Only activate tab if the current route match exactly with the tab path

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

![](https://github.com/dflourusso/v-tabs-router/blob/master/print.png)
