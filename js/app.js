define(function (require) {
  var $ = require('jquery');
  var WeatherConditions = require('models/weather-conditions');
  var Forecast = require('collections/forecast');
  var CurrentWeatherView = require('views/current-weather');

  var app = {};

  var latLong = "45.5330,-122.6894";
  var apiKey = "a981b48f64d44549870777bac4da560d";
  var url = 'https://api.forecast.io/forecast'

  $.getJSON(url + '/' + apiKey + '/' + latLong + '?callback=?')
   .done(main)
   .fail(function () {
   });

  function main (data) {
    console.log(data);
    var currentWeatherModel = new WeatherConditions(data.currently);
    var dailyForcastCollection = new Forecast(data.daily.data);

    var currentWeatherView = new CurrentWeatherView({model: currentWeatherModel});

    app.current = currentWeatherModel;
    app.forecast = dailyForcastCollection;
  }

  window.app = app;

});
