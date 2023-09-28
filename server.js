const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/chat/:roomId", (req, res) => {
  const roomId = req.params.roomId;
  const chatData = {};
  res.render("chat", { chatData });
});

const server = app.listen(PORT, () => console.log("Now listening"));
const io = require("socket.io")(server);

app.post("/chat/:roomId/send", (req, res) => {
  const roomId = req.params.roomId;
  const messageText = req.body.message;
  const userName = req.body.firstName;

  io.to(roomId).emit("chat-message", { text: messageText, user: userName });

  res.sendStatus(200);
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  // setting up socket.io connection
  io.on("connection", (socket) => {
    socket.on("send-message", (message) => {
      io.emit("chat-message", message);
    });
  });
});