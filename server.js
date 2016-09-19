var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/docs');
app.use(express.static(staticPath));

var port = 3000;
app.listen(port, function() {
  console.log('listening on port ' + port);
});