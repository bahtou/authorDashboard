var mongoose = require('mongoose');

var AuthorSchema = module.exports = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  books: [
    {
      title: {type: String},
      desc: {type: String},
      img: {type: String},
      genre: [String]
    }
  ],
  buzzers: [{
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    influence: Number,
    network: Number,
    lastActive: {type: Date, get: fixDate},
    genre: [String]
  }]
}, {
  collection: 'authors',
  safe: true
});

// helper function
function fixDate(date) {
  return moment(date).format('dddd[,] MMMM D YYYY [at] h:mm a');
}
