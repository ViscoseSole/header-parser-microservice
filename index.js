const
  express = require('express'),

  app = express(),
  port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);

  let language = req.headers["accept-language"].split(",")[0];
  let software = req.headers["user-agent"].match(/\(.*?\)/)[0];

  res.send({ipaddress: ip, language, software});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
