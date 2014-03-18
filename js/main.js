requirejs.config({
  urlRoot: '/js',

  paths: {
    'jquery': 'lib/jquery-2.1.0',
    'backbone': 'lib/backbone',
    'underscore': 'lib/underscore',
    'hbs': 'lib/require-handlebars-plugin/hbs',
    'templates': '../templates'
  }

});

require(['app']);
