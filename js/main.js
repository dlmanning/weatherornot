requirejs.config({
  urlRoot: '/js',

  paths: {
    'jquery'    : 'lib/jquery-2.1.0',
    'backbone'  : 'lib/backbone',
    'underscore': 'lib/underscore',
    'thorax'    : 'lib/thorax',
    'hbs'       : 'lib/require-handlebars-plugin/hbs',
    'templates' : '../templates',
    'moment'    : 'lib/moment.min',
    'bootstrap' : 'lib/bootstrap.min'
  },

  shim: {
    'thorax': {
      deps: ['backbone', 'lib/globalHandlebars'],
      exports: 'Thorax'
    },
    'bootstrap': {
      deps: ['jquery']
    }
  },

  hbs: {
    compileOptions: {
      data: true
    }
  }

});

require(['bootstrap','app']);
