'use strict'

var React = require('react')
var formatChildren = require('./base-format-children')

function applyChildren (element, children) {
  if (process.env.NODE_ENV !== 'production' && !React.isValidElement(element)) {
    throw new Error(JSON.stringify(element) + ' is not a valid element')
  }
  return React.cloneElement.apply(React, [ element, null ].concat(children || []))
}

exports.formatChildren = formatChildren.bind(null, applyChildren)
