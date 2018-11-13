var html = require('choo/html')
var Component = require('choo/component')

module.exports = class MyComponent extends Component {
  constructor (id, state, emit) {
    super(id)
    this.state = state
    this.emit = emit
    this.local = state.components[id] = {}
  }

  createElement () {
    return html`<div>I'm a component</div>`
  }

  update () {
    return true
  }
}