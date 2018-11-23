const uuidv4 = require('uuid/v4')

// we can change this in the future for a hash function, if needed.
module.exports = () => uuidv4().split('-').shift()
