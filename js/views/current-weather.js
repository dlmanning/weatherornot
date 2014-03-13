define(function (require) {
  var Backbone = require('backbone');

  var CurrentWeather = Backbone.View.extend({
    el: '#current-conditions',

    initialize: function () {
      this.render();
    },

    render: function () {
      this.$el.html('<h1>Temperature: ' + this.model.get('temperature') + '</h1>');
    }
  });

  return CurrentWeather;
})