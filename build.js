var fs = require('fs'),
  Glue = require('gluejs');

new Glue()
    .npm('sax','.') // output paths are relative to this
    .exclude(new RegExp('examples')) // excludes rhino
    .exclude(new RegExp('dist')) // excludes rhino
    .exclude(new RegExp('test')) // excludes rhino
    .render(function (err, txt) {
        // write the result to a file
        fs.writeFile('out.js', txt);
    });
