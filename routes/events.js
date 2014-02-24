
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('events', { title: 'Mother Olympics' });
};

exports['catch-the-flame'] = function(req, res){
  res.render('catch-the-flame', { title: 'Mother Olympics' });
};

exports['coaster'] = function(req, res){
  res.render('coaster', { title: 'Mother Olympics' });
};

exports['ice-dance'] = function(req, res){
  res.render('ice-dance', { title: 'Mother Olympics' });
};

exports['drinks'] = function(req, res){
  res.render('drinks', { title: 'Mother Olympics' });
};

exports['save-nation'] = function(req, res){
  res.render('save-nation', { title: 'Mother Olympics' });
};

exports['snowball'] = function(req, res){
  res.render('snowball', { title: 'Mother Olympics' });
};

exports['tubing'] = function(req, res){
  res.render('tubing', { title: 'Mother Olympics' });
};

exports['puzzle'] = function(req, res){
  res.render('puzzle', { title: 'Mother Olympics' });
};