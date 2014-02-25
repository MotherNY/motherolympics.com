// var walk    = require(walk);
// var files   = [];

// // Walker options
// // var walker  = walk.walk(./views, { followLinks: true });

// // walker.on(file, function(root, stat, next) {
// //     // Add this file to the list of files
// //     files.push(root + / + stat.name);
// //     next();
// // });

// // walker.on(end, function() {
// //     console.log(files);
// // });

// bangladesh.html
//   bolivia.html
//   botswana.html
//   cambodia.html
//   catch-the-flame.html
//   chad.html
//   coaster.html
//   drinks.html
//   events.html
//   ice-dance.html
//   kuwait.html
//   kyrgyzstan.html
//   moist.html
//   nations.html
//   olympic-village.html
//   puzzle.html
//   save-nation.html
//   senegal.html
//   seychelles.html
//   snowball.html
//   st-lucia.html
//   timetable.html
//   tubing.html
//   vatican-city.html
//   zambia.html

var f = [
'http://127.0.0.1:3422/',
'http://127.0.0.1:3422/events',
'http://127.0.0.1:3422/events/catch-the-flame',
'http://127.0.0.1:3422/events/coaster',
'http://127.0.0.1:3422/events/drinks',
'http://127.0.0.1:3422/events/ice-dance',
'http://127.0.0.1:3422/events/puzzle',
'http://127.0.0.1:3422/events/save-nation',
'http://127.0.0.1:3422/events/snowball',
'http://127.0.0.1:3422/events/tubing',
'http://127.0.0.1:3422/nations',
'http://127.0.0.1:3422/nations/bangladesh',
'http://127.0.0.1:3422/nations/bolivia',
'http://127.0.0.1:3422/nations/botswana',
'http://127.0.0.1:3422/nations/cambodia',
'http://127.0.0.1:3422/nations/chad',
'http://127.0.0.1:3422/nations/kuwait',
'http://127.0.0.1:3422/nations/kyrgyzstan',
'http://127.0.0.1:3422/nations/seychelles',
'http://127.0.0.1:3422/nations/senegal',
'http://127.0.0.1:3422/nations/st-lucia',
'http://127.0.0.1:3422/nations/vatican-city',
'http://127.0.0.1:3422/nations/zambia',
'http://127.0.0.1:3422/timetable',
'http://127.0.0.1:3422/olympic-village',
'http://127.0.0.1:3422/moist']

var cp = require('child_process')

f.forEach(function(el,i){
  
  var name = ''
  var d = el.split('/')
  if(d.length > 4){
  // snag last two
    name = d[d.length-2] +'/'+ d[d.length-1]    
  }
  else{
    name = el.split('/').pop()
  }

  if(!name) name = 'index'
  
  name += '.html'

  console.log(name)
  // console.log('wget -O '+name+' '+el)

  cp.exec('wget -O '+name+' '+el, function(e,stout,stderr){
    if(e) console.error(e)
    if(stout) console.dir(stout)
    if(stderr) console.error(stderr)
  })

})

