const router = require('express').Router();
const mongoose = require('mongoose');

router.get('/', (req, res) => {
  mongoose.model('Exercise').find().then(items => {
    res.json(items);
  });
});

module.exports = router;
