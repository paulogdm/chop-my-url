const mongoose = require('mongoose')

const Short = mongoose.model('Short', {
  originalUrl: {
    type: String
  },
  shortPath: {
    type: String,
    unique: true,
    index: true
  }
})

module.exports = Short
