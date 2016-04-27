/**
 * AppController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  showDay: function (req, res) {
    // Define the day today, e.g. Tuesday
    var day = sails.moment().format('dddd');
    // Render the view
    return res.view('homepage', {
      // And include this data
      day: day
    });
  }
};