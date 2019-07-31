const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const GameSchema = new Schema({
  name: {
    text: String,
    required: true
  },
  system: {
    type: String,
    required: true
  },
  version: {
    type: String,
    required: true
  },
  serial_no: {
    type: String,
    required: false
  },
  box: {
    type: Boolean,
    required: true
  },
  manual: {
    type: Boolean,
    required: true
  },
  producer: {
    type: String,
    required: false
  },
  release_date: {
    type: Date,
    required: false
  },
  note: {
    type: String,
    required: false
  },
  game_language: {
    type: [String],
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
})

module.exports = Game = mongoose.model('games', GameSchema);