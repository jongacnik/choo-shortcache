var choo = require('choo')
var devtools = require('choo-devtools')
var shortcache = require('..')

var app = choo()
app.use(devtools())
app.use(shortcache)
app.route('*', require('./view'))
app.mount('body')