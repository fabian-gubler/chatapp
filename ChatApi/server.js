var express = require('express');
var app = express();
var port = 3000;

app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const chat_history = [];

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  next();
});


app.get('/', function (req, res, next) {
  res.json({ message: 'hsg chat-app api works...' });
});


app.get('/history', function (req, res, next) {
  res.send(chat_history);
});

app.post('/history', function (req, res, next) {
  const chat_message = req.body?.message;
  const nickname = req.body?.nickname;

  if (!chat_message || !nickname) {
    res.status(400).send('Bad request - Wrong format?');
    return;
  }

  const t_stamp = new Date();
  const msg_item = {
    message: chat_message,
    nickname: nickname,
    t_stamp: t_stamp,
  };

  chat_history.push(msg_item);

  res.json(msg_item);
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});