
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('livefeed', {title: 'Mother Olympics'});
};