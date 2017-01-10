const router = require('express').Router();
const mongoose = require('mongoose');

router.get('/', (req, res) => {
  mongoose.model('Record').find().then(items => {
    res.json(items);
  });
});

router.post('/', (req, res) => {
  mongoose.model('Record').create(req.body).then(result => {
    res.json(result);
  });
});

router.delete('/:id', (req, res) => {
  mongoose.model('Record').remove({_id: mongoose.Types.ObjectId(req.param('id'))}).then(() => {
    res.json(true);
  });
});

module.exports = router;
