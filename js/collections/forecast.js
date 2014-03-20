define(function (require) {
  var Thorax = require('thorax');
  var WeatherConditions = require('models/weather-conditions');

  var Forecast = Thorax.Collection.extend({
    model: WeatherConditions
  });

  return Forecast;

});
