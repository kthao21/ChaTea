const router = require("express").Router()
const { User } = require("../models");
const withAuth = require("../utils/auth");
router.get('/', (req, res) => {


    res.render('homepage', { title: 'ChaTea' });
  });
   
    //Displays login
  router.get('/login', (req, res) => {
      res.render('login');
    });
   
    //Fetches user data
    router.get('/profile', withAuth, async (req, res) => {
      const userData = await User.findAll();
      const users = userData.map((user)=>user.get({plain: true}))
      res.render('profile', { users });
    });
    module.exports = router

