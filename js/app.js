define(function (require) {
  var $ = require('jquery');
  var WeatherConditions = require('models/weather-conditions');
  var Forecast = require('collections/forecast');
  var CurrentWeatherView = require('views/current-weather');
  var ForecastView = require('views/forecast');
  var Router = require('router');

  var app = {};

  var latLong = "45.5330,-122.6894";
  var apiKey = "7c09fd3f9ca335e5bc1968038a8e38c4";
  var url = 'https://api.forecast.io/forecast'

  $.getJSON(url + '/' + apiKey + '/' + latLong + '?callback=?')
   .done(main)
   .fail(function () {
      $('#loading-message').text('Your data failed to load :(');
   });

  function main (data) {
    
    console.log(data);
    
    $('#loading-message').text('Your weather is now!');

    var currentWeatherModel = new WeatherConditions(data.currently);
    var dailyForecastCollection = new Forecast(data.daily.data);

    var currentWeatherView = new CurrentWeatherView({model: currentWeatherModel});
    var forecastView = new ForecastView({collection: dailyForecastCollection});

    var router = new Router({
      current: currentWeatherView,
      forecast: forecastView
    });

    Backbone.history.start();

    app.current = currentWeatherModel;
    app.forecast = dailyForecastCollection;
  }

  window.app = app;

});
