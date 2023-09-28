const router = require("express").Router()
const withAuth = require("../utils/auth");
router.get('/', (req, res) => {


    res.render('homepage', { title: 'ChaTea' });
  });
   
    //Displays login
  router.get('/login', (req, res) => {
      res.render('login');
    });
   
    //Fetches user data
    router.get('/profile', withAuth, (req, res) => {
      const userData = {};
      res.render('profile', { userData });
    });
    module.exports = router