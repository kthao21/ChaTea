
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({})
app.engine('handlebars', exphbs)
app.set('view engine', 'handlebars');


app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));
app.use(routes)


 
//Displays chat room
app.get('/chat/:roomId', (req, res) => {
    const roomId = req.params.roomId;
    //Fetches chat room data for the id of said chat room
    const chatData = {};
    res.render('chat', { chatData });
  });
 
  //with sending messages
  app.post('/chat/:roomId/send', (req, res) => {
    const roomId = req.params.roomId;
    const messageText = req.body.message;
  });
 


app.listen(PORT, () => {
    console.log('Sever is starting at port', 3001)
    sequelize.sync({force:false})
});
