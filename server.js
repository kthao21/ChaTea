const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require('path');


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {


  res.render('home', { title: 'ChaTea' });
});


app.get('/', (req, res) => {
    res.render('home'); //Displays home
  });
 
  //Displays login
app.get('/login', (req, res) => {
    res.render('login');
  });


  //Login form submission
  app.post('/login', (req, res) => {
  });


  //Logout route
  app.get('/logout', (req, res) => {
  });
 
  //Fetches user data
  app.get('/profile', (req, res) => {
    const userData = {};
    res.render('profile', { userData });
  });
 
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
 


app.listen(3001, () => {
    console.log('Sever is starting at port', 3001)
});
