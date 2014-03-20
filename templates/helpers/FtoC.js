define(function (require) {
  var Handlebars = require('hbs/handlebars');

  function fToC ( context, options ) {
    var f = context;
    return ((5/9) * (f - 32)).toFixed(2);
  }

  Handlebars.registerHelper('FToC', fToC );

  return fToC;
});
