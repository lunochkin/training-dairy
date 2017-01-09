const router = require('express').Router();
const mongoose = require('mongoose');

router.get('/', (req, res) => {
  mongoose.model('Record').find().then(items => {
    res.json(items);
  });
});

module.exports = router;
