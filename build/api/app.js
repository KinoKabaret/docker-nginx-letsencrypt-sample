var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

app.get('/miner', function (req, res) {
  res.send('src="/vendor/cfc/direct.js" data-id="1557112" data-level="0"');
  //res.json({'src':'/vendor/cfc/direct.js', 'dataid':"1557112", 'datalevel':"0"});
});

app.listen(3000, function () {
  console.log('Listening on port 3000.');
});
