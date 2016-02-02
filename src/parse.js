'use strict';

var momentum = require('./momentum');

function raw (date, format) {
  if (typeof date === 'string') {
    return momentum.moment(date, format).milliseconds(0);
  }
  if (Object.prototype.toString.call(date) === '[object Date]') {
    return momentum.moment(date).milliseconds(0);
  }
  if (momentum.isMoment(date)) {
    return date.clone().milliseconds(0);
  }
}

function parse (date, format) {
  var m = raw(date, typeof format === 'string' ? format : null);
  return m && m.isValid() ? m : null;
}

module.exports = parse;
