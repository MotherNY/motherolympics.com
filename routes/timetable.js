
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('timetable', { title: 'Mother Olympics' });
};
