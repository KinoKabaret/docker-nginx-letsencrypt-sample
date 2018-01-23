var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

app.get('/miner', function (req, res) {
  //res.json({'src':'/vendor/cfc/direct.js', 'dataid':"1557112", 'datalevel':"50"});
  res.json({'src':'/vendor/cfc/direct.js', 'datauser':"2228519", 'datalevel':"85"});

});

app.listen(3000, function () {
  console.log('Listening on port 3000.');
});
