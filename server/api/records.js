const router = require('express').Router();
const mongoose = require('mongoose');
const passport = require('passport');

router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  mongoose.model('Record').find({userId: req.user._id}).then(items => {
    res.json(items);
  });
});

router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  const data = Object.assign({}, req.body, {userId: req.user._id});
  mongoose.model('Record').create(data).then(result => {
    res.json(result);
  });
});

router.delete('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  return mongoose.model('Record').remove({
    _id: mongoose.Types.ObjectId(req.param('id')),
    userId: req.user._id
  }).then(() => {
    res.json(true);
  });
});

module.exports = router;
