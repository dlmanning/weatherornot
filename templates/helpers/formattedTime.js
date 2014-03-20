define(function (require) {
  var Handlebars = require('hbs/handlebars');
  var moment = require('moment');

  function formattedTime (context, options) {

    var formatString = (typeof options === 'string') ? options 
                                                     : "MMM DD hh:mma";

    return moment.unix(context).format(formatString);
  }

  Handlebars.registerHelper( 'formattedTime', formattedTime );

  return formattedTime;
});