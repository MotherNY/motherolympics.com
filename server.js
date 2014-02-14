var http = require('http')
  , ecstatic = require('ecstatic');

http.createServer(
  ecstatic({ root: __dirname + '/' })
).listen(3422);

console.log('Listening on http://127.0.0.1:3422')