define(function (require) {
  var Backbone = require('backbone');

  var Router = Backbone.Router.extend({
    initialize: function (options) {
      this.currentWeatherView = options.current;
      this.forecastView = options.forecast;
    },

    routes: {
      'current': 'displayCurrentWeather',
      'forecast': 'displayForecast'
    },

    displayForecast: function () {
      this.currentWeatherView.$el.hide();
      this.forecastView.$el.show();
    },

    displayCurrentWeather: function () {
      this.currentWeatherView.$el.show();
      this.forecastView.$el.hide();
    }

  });

  return Router;
});