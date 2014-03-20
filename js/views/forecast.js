define(function (require) {
  var Thorax = require('thorax');
  var template = require('hbs!templates/forecast');

  var Forecast = Thorax.View.extend({
    name: 'Forecast',
    
    initialize: function () {
      this.render();
    },

    template: template

  });

  return Forecast;

})
