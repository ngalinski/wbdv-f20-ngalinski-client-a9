const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/wbdv-f20-ngalinski-client-a9'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));});
app.listen(process.env.PORT || 3001);
