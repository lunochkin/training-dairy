const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: [
      {
        validator(v) {
          return validator.isEmail(v);
        },
        message: 'Email has incorrect format'
      },
      {
        validator(v, cb) {
          mongoose.model('User').findOne({email: v}).then(user => cb(!user));
        },
        message: 'Such email is already used'
      }
    ]
  },
  password: String
}, {
  timestamps: true
});

mongoose.model('User', userSchema);
