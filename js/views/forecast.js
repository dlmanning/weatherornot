define(function (require) {
  var Thorax = require('thorax');
  
  var Forecast = Thorax.View.extend({
    name: 'Forecast',

    initialize: function () {
      this.render();
    }

  });

  return Forecast;

})
