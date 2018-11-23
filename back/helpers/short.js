const mongoose = require('mongoose')

const Short = require('../models/Short.js')
const uuid = require('./uuid.js')

// https://zeit.co/docs/v2/deployments/environment-variables-and-secrets#from-the-cli
const dbuser = process.env.mongo_chop_user
const dbpassword = process.env.mongo_chop_pass

// Remember to add your own secrets!!!
if (!dbuser || !dbpassword) {
  throw new Error(`A user and password is required! Got user:${dbuser} and password:${dbpassword}`)
}

// connecting to mongo
mongoose.connect(`mongodb://${dbuser}:${dbpassword}@ds115154.mlab.com:15154/chop`, {
  useNewUrlParser: true
})

const getByShortPath = async (shortPath) => Short.findOne({ shortPath }).exec()

const getByOriginalUrl = async (originalUrl) => Short.findOne({ originalUrl }).exec()

const insert = async (originalUrl) => {
  let exists
  let shortPath
  // this loop should not run in most cases...
  // in case of collision, generate another uuid
  do {
    shortPath = uuid()
    exists = await getByShortPath(shortPath)
  } while (exists)

  const newDocument = new Short({ shortPath, originalUrl })
  newDocument.save()

  return { originalUrl, shortPath }
}

module.exports = {
  getByShortPath,
  getByOriginalUrl,
  insert
}
