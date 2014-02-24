
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('nations', { title: 'Mother Olympics' });
};

exports['bangladesh'] = function(req, res){
  res.render('bangladesh', { title: 'Mother Olympics' });
};

exports['bolivia'] = function(req, res){
  res.render('bolivia', { title: 'Mother Olympics' });
};

exports['botswana'] = function(req, res){
  res.render('botswana', { title: 'Mother Olympics' });
};

exports['cambodia'] = function(req, res){
  res.render('cambodia', { title: 'Mother Olympics' });
};

exports['chad'] = function(req, res){
  res.render('chad', { title: 'Mother Olympics' });
};

exports['kuwait'] = function(req, res){
  res.render('kuwait', { title: 'Mother Olympics' });
};

exports['kyrgyzstan'] = function(req, res){
  res.render('kyrgyzstan', { title: 'Mother Olympics' });
};

exports['seychelles'] = function(req, res){
  res.render('seychelles', { title: 'Mother Olympics' });
};

exports['senegal'] = function(req, res){
  res.render('senegal', { title: 'Mother Olympics' });
};

exports['st-lucia'] = function(req, res){
  res.render('st-lucia', { title: 'Mother Olympics' });
};

exports['vatican-city'] = function(req, res){
  res.render('vatican-city', { title: 'Mother Olympics' });
};

exports['zambia'] = function(req, res){
  res.render('zambia', { title: 'Mother Olympics' });
};
