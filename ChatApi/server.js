var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var port = 3000

// app.set("port", port)
app.set('port', (process.env.PORT || port));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var chatHistory = []
var nicknames = []

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*")

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  )

  // Request headers you wish to allow
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )

  // Pass to next layer of middleware
  next()
})

// test
app.get("/", function (req, res, next) {
  res.json({ message: "hsg chat-app api works..." })
})

// history
app.get("/history", function (req, res, next) {
  res.send(chatHistory)
})

app.post("/history", function (req, res, next) {
  var date = new Date()

  console.log(req.body)
  chatHistory.push({
    message: req.body.message,
    nickname: req.body.nickname,
    date: date,
  })

  res.json({ message: "History created!" })
})

// nicknames
app.get("/nicknames", function (req, res, next) {
  res.send(nicknames)
})

app.get("/nicknames/:id", function (req, res, next) {
  for (var i = 0; nicknames.length > 0; i++) {
      var nickname = nicknames[i];

      if (nickname && nickname.id === +req.params.id) {
          res.send({ username: nickname.username, id: nickname.id });
      }
  }

  // const nickname = nicknames.find((e) => e.id === +req.params.id)

  // if (!nickname) {
  //   res.status(404).send("Nickname not found")
  // }

  // res.status(200).send(nickname)
})

app.post("/nicknames", function (req, res, next) {
  console.log(req.body)
  nicknames.push({ username: req.body.username, id: nicknames.length + 1 })

  res.json({ username: req.body.username })
})

app.listen(app.get("port"), function () {
  console.log("Node app is running on port", app.get("port"))
})
