const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recordSchema = new Schema({
  exercise: Schema.ObjectId,
  userId: {type: Schema.ObjectId, required: true},
  date: Date,
  reps: Array
}, {
  timestamps: true
});

mongoose.model('Record', recordSchema);
