
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , events = require('./routes/events')
  , nations = require('./routes/nations')
  , timetable = require('./routes/timetable')
  , ov = require('./routes/olympic-village')
  , moist = require('./routes/moist')
  , livefeed = require('./routes/livefeed')
  , http = require('http')
  , path = require('path')
  , pack = require(path.resolve(__dirname, './package.json'))


var app = express();

// all environments
app.set('port', process.env.PORT || 3422);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon(path.join(__dirname, 'public/favicon.ico')));
app.use(express.compress())
app.use(express.logger(app.locals.env === 'production' ? 'tiny' : 'dev' ))
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

app.locals.description = "Mother Olympics"
app.locals.node_version = process.version.replace('v', '')
app.locals.app_version = pack.version
app.locals.env = process.env.NODE_ENV



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/events', events.index);
app.get('/events/catch-the-flame', events['catch-the-flame']);
app.get('/events/coaster', events['coaster']);
app.get('/events/drinks', events['drinks']);
app.get('/events/ice-dance', events['ice-dance']);
app.get('/events/puzzle', events['puzzle']);
app.get('/events/save-nation', events['save-nation']);
app.get('/events/snowball', events['snowball']);
app.get('/events/tubing', events['tubing']);

app.get('/nations', nations.index);

app.get('/nations/bangladesh', nations['bangladesh']);
app.get('/nations/bolivia', nations['bolivia']);
app.get('/nations/botswana', nations['botswana']);
app.get('/nations/cambodia', nations['cambodia']);
app.get('/nations/chad', nations['chad']);
app.get('/nations/kuwait', nations['kuwait']);
app.get('/nations/kyrgyzstan', nations['kyrgyzstan']);
app.get('/nations/seychelles', nations['seychelles']);
app.get('/nations/senegal', nations['senegal']);
app.get('/nations/st-lucia', nations['st-lucia']);
app.get('/nations/vatican-city', nations['vatican-city']);
app.get('/nations/zambia', nations['zambia']);

app.get('/timetable', timetable.index);

app.get('/olympic-village', ov.index);

app.get('/moist', moist.index);

app.get('/live-feed', livefeed.index);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
