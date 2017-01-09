const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recordSchema = new Schema({
  exercise: Schema.ObjectId,
  date: Date
}, {
  timestamps: true
});

mongoose.model('Record', recordSchema);
