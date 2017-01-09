const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: String
}, {
  timestamps: true
});

mongoose.model('Exercise', exerciseSchema);
