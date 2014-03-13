define(function (require) {
  var Backbone = require('backbone');

  var Forecast = Backbone.View.extend({
    el: '#forecast',

    initialize: function () {
      this.render();
    },

    render: function () {
      var self = this;

      this.$el.html('<ul></ul>');

      this.collection.each(function (model) {
        self.$el.append('<li>' + model.getFormattedTime() +
                        ': ' + model.get('summary') + '</li>');
      });

      return this;
    }

  });

  return Forecast;

})