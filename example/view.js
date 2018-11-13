var html = require('choo/html')
var { cache } = require('..')
var MyComponent = require('./component')

module.exports = function (state, emit) {
  return html`
    <body>
      ${cache(MyComponent, 'MyComponent').render()}
    </body>
  `
}