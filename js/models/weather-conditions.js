define(function (require) {
  var Backbone = require('backbone');

  var WeatherConditions = Backbone.Model.extend({

    getFormattedTime: function () {
      var UTC = this.get('time') * 1000;

      return new Date(UTC).toString();
    }


  });

  return WeatherConditions;

});
