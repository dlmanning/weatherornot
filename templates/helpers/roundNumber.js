define(function (require) {
  var Handlebars = require('hbs/handlebars');

  function roundNumber ( context, options ) {
    // Simple function for example
    return Math.round( context );
  }

  Handlebars.registerHelper( 'roundNumber', roundNumber );

  return roundNumber;
});
