define(function (require) {
  var Backbone = require('backbone');
  var WeatherConditions = require('models/weather-conditions');

  var Forecast = Backbone.Collection.extend({
    model: WeatherConditions

  });

  return Forecast;

});
