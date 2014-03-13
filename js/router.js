define(function (require) {
  var Backbone = require('backbone');

  var Router = Backbone.Router.extend({
    initialize: function (options) {
      this.currentWeatherView = options.current;
      this.dailyForecastView = options.dailyForecast;
      this.hourlyForecastView = options.hourlyForecast;

    },

    routes: {
      'current': 'displayCurrentWeather',
      'daily-forecast': 'displayDailyForecast',
      'hourly-forecast': 'displayHourlyForecast'
    },

    displayHourlyForecast: function () {
      this.hourlyForecastView.$el.show();
      this.dailyForecastView.$el.hide();
      this.currentWeatherView.$el.hide();
    },

    displayDailyForecast: function () {
      this.hourlyForecastView.$el.hide();
      this.currentWeatherView.$el.hide();
      this.dailyForecastView.$el.show();
    },

    displayCurrentWeather: function () {
      this.hourlyForecastView.$el.hide();
      this.currentWeatherView.$el.show();
      this.dailyForecastView.$el.hide();
    }

  });

  return Router;
});