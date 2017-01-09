const router = require('express').Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config');

router.post('/', (req, res) => {
  const UserModel = mongoose.model('User');

  let user = new UserModel();
  user.email = req.body.email;
  user.password = req.body.password;
  user.save(() => {
    res.json(null);
  }).then(() => {
    let token = jwt.sign({email: user.email}, config.jwtSecret, {
      expiresIn: "365d"
    });
    res.json(token);
  });
});

module.exports = router;
