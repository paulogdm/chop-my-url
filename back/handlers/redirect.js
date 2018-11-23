const Koa = require('koa')
const responseTime = require('../middlewares/responseTime')
const errorHandler = require('../middlewares/errorHandler')
const shortActions = require('../helpers/short')

const app = new Koa()

app.use(responseTime)
app.use(errorHandler.use)
app.on('Error', errorHandler.on)

/**
 * Function that handles a failed request for a short url
 * @param  {Object} ctx Koa's context
 */
const notFound = async ctx => {
  ctx.status = 404
}

/**
 * This function redirects the request to another location
 * @param  {Object} ctx Koa's context
 * @param  {String} originalUrl URL stored in mongo
 */
const redirect = async (ctx, originalUrl) => {
  let location = originalUrl

  // handles cases like example.com
  if (!location.startsWith('https://') && !location.startsWith('http://')) {
    location = `https://${location}`
  }

  ctx.status = 301
  ctx.redirect(location)
  ctx.body = 'Redirecting...'
}

/**
 * Main function. It handles the request by searching for an entry
 * in the database. If it exists, redirect, else, return not found.
 * @param  {Object} ctx Koa's context
 */
const main = async ctx => {
  // example: https://chop.now.sh/abcdef => short := abcef
  const short = ctx.request.url.split('/').pop()
  // query db
  const document = await shortActions.getByShortPath(short)

  return document ? redirect(ctx, document.originalUrl) : notFound(ctx)
}

app.use(main)

// to test locally, is there a better way?
if (!process.env.NOW_REGION) app.listen(3000)
module.exports = app.callback()
