const router = require("express").Router()
router.get('/', (req, res) => {


    res.render('home', { title: 'ChaTea' });
  });
   
    //Displays login
  router.get('/login', (req, res) => {
      res.render('login');
    });
  
  
    //Login form submission
    router.post('/login', (req, res) => {
    });
  
  
    //Logout route
    router.get('/logout', (req, res) => {
    });
   
    //Fetches user data
    router.get('/profile', (req, res) => {
      const userData = {};
      res.render('profile', { userData });
    });
    module.exports = router