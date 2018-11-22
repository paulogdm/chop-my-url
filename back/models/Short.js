const mongoose = require('mongoose')

const Short = mongoose.model('Short', {
  originalUrl: {
    type: String,
    unique: true,
    index: true
  },
  shortUrl: {
    type: String,
    unique: true,
    index: true
  }
})

module.exports = Short
