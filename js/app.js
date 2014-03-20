define(function (require) {
  var $                  = require('jquery');
  var Thorax             = require('thorax');
  var WeatherConditions  = require('models/weather-conditions');
  var Forecast           = require('collections/forecast');
  var CurrentWeatherView = require('views/current-weather');
  var ForecastView       = require('views/forecast');
  var Router             = require('router');

  var app = {};

  var latLong = "45.5330,-122.6894";
  var apiKey  = "7c09fd3f9ca335e5bc1968038a8e38c4";
  var url     = 'https://api.forecast.io/forecast'

  $.getJSON(url + '/' + apiKey + '/' + latLong + '?callback=?')
   .done(main)
   .fail(function () {
      $('#loading-message').text('Your data failed to load :(');
   });

  function main (data) {

    $('#loading-message').text('Your weather is now!');

    var currentWeatherModel      = new WeatherConditions(data.currently);
    var dailyForecastCollection  = new Forecast(data.daily.data);
    var hourlyForecastCollection = new Forecast(data.hourly.data);

    var currentWeatherView = new CurrentWeatherView({
      model: currentWeatherModel
    });

    var dailyForecastView = new ForecastView({
      el: '#daily-forecast',
      template: require('hbs!templates/daily-forecast'),
      collection: dailyForecastCollection
    });

    var hourlyForecastView = new ForecastView({
      el: '#hourly-forecast',
      template: require('hbs!templates/hourly-forecast'),
      collection: hourlyForecastCollection
    });

    var router = new Router({
      current: currentWeatherView,
      dailyForecast: dailyForecastView,
      hourlyForecast: hourlyForecastView
    });

    Backbone.history.start();

    app.current = currentWeatherModel;
    app.forecast = dailyForecastCollection;
    app.views = {};
    app.views.currentWeatherView = currentWeatherView;
    app.views.dailyForecastView = dailyForecastView;
  }

  window.app = app;

});
