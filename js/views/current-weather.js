define(function (require) {
  var Backbone = require('backbone');
  var template = require('hbs!templates/current-weather');

  var CurrentWeather = Backbone.View.extend({
    el: '#current-conditions',

    template: template,

    initialize: function () {
      this.render();
    },

    render: function () {
      this.$el.html(this.template(this.model.attributes));
    }
  });

  return CurrentWeather;
})
