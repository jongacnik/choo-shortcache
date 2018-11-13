var componentCache = undefined

function componentCachePlugin (state, emitter) {
  componentCache = state.cache
}

function componentCacheGetter () {
  return componentCache.apply(this, arguments)
}

module.exports = componentCachePlugin
module.exports.cache = componentCacheGetter