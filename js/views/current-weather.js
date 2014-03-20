define(function (require) {
  var Thorax = require('thorax');
  var template = require('hbs!templates/current-weather');

  var CurrentWeather = Thorax.View.extend({
    el: '#current-conditions',

    initialize: function () {
      this.render();
    },

    template: template
    
  });

  return CurrentWeather;
})
