const Server = require('@skuyjs/http-server');

const cors = require('.')({
  'Access-Control-Allow-Origin': ['localhost'],
  'Access-Control-Allow-Headers': ['Content-Type'],
  'Access-Control-Allow-Methods': ['GET', 'POST'],
});

const app = new Server();

app.use(cors.build());

app.get('/', (req, res) => {
  res.send('hore');
});

app.listen(8080);
