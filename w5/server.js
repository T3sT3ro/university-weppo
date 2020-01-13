const https = require('https');
const fs = require('fs');

const options = {
  pfx: fs.readFileSync('mycert.pfx')
};

https.createServer(options, function (req, res) {
  res.setHeader("Content-Disposition", "attachment");
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);
