var path = require('path');
var express = require('express');

var app = express();
var port = 3000;
var gatoFile = path.resolve(__dirname, 'gato.gif');


app.get('*', function(req, res) {
  res.sendFile(gatoFile);
})


app.listen(port, function() {
  console.log('App corriendo en el puerto ' + port)
})
