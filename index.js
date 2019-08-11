(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['bpjs'], factory)
  } else if (typeof exports === 'object') {
    module.exports = factory(require('bpjs'))
  } else {
    root.returnExports = factory(root.bpjs)
  }
}(this, function (bpjs) {
  return {}
}))
