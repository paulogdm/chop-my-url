const mongoose = require('mongoose')

const Short = require('../models/Short.js')
const { hash } = require('./hash.js')

// https://zeit.co/docs/v2/deployments/environment-variables-and-secrets#from-the-cli
const dbuser = process.env.mongo_chop_user
const dbpassword = process.env.mongo_chop_pass

if (!dbuser || dbpassword) {
  throw new Error('A user and password is required!')
}

// connecting to mongo
mongoose.connect(`mongodb://${dbuser}:${dbpassword}@ds043170.mlab.com:43170/catdb`, {
  useNewUrlParser: true
})

const getByShortUrl = async (short) => {}

const getByOriginalUrl = async (original) => {}

const insert = async (original) => {

}

module.exports = {
  getByShortUrl,
  getByOriginalUrl,
  insert
}
