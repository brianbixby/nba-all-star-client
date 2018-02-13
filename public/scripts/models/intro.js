'use strict';
var app = app || {};

(function(module) {
  function Intro(obj) {
    for (var prop in obj) this[prop] = obj[prop];
  }

  module.Intro = Intro;

})(app);