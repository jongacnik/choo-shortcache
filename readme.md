# choo-shortcache

shortcut access to `state.cache()` anywhere in your app

## Example

```js
app.use(require('choo-shortcache'))
```

Elsewhere in your app...

```js
var { cache } = require('choo-shortcache')
var MyComponent = require('./mycomponent')

module.exports = function (state, emit) {
  return html`
    <body>
      ${cache(MyComponent, 'MyComponent').render()}
    </body>
  `
}
```

## What is this for?

(nano)component instances are managed in `choo` using `state.cache()`. This pattern works well, but it requires you pass `state` everywhere, potentially very deep into your app, just to create components. This plugin allows you to create components at any depth level in your app without directly passing the entire state all the way down. Under the hood it just creates a reference to `state.cache()` that you can import with:

```js
var { cache } = require('choo-shortcache')
```