'use strict';
var app = app || {};

(function(module) {
  const introView = {};

  introView.init = function(ctx, next) {
    $('.view').addClass('hidden').find('*').off();
    $('.introView').removeClass('hidden');
    $('#pop-up-trigger').on('click', function() {
      $('.pop-up').toggleClass('active');
      $('.pop-up-background').toggleClass('active-background');
    })
    $('#pop-up-block').on('click', function() {
      $('.pop-up').toggleClass('active');
      $('.pop-up-background').toggleClass('active-background');
    })
    // next();
  }

  module.introView = introView;
})(app);