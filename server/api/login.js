const router = require('express').Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config');


router.post('/', (req, res) => {
  mongoose.model('User').findOne({email: req.body.email, password: req.body.password}).then(user => {
    if (!user) {
      res.json(null);
      return;
    }

    let token = jwt.sign({email: user.email}, config.jwtSecret, {
      expiresIn: "365d"
    });

    res.json(token);
  });
});


module.exports = router;
