const Koa = require('koa')
const responseTime = require('../middlewares/responseTime')
const errorHandler = require('../middlewares/errorHandler')
const shortActions = require('../helpers/short')

const app = new Koa()

app.use(responseTime)
app.use(errorHandler.use)
app.on('Error', errorHandler.on)

const notFound = async ctx => {
  ctx.status = 404
}

const redirect = async (ctx, originalUrl) => {
  let location = originalUrl

  if (!location.startsWith('https://') && !location.startsWith('http://')) {
    location = `https://${location}`
  }

  ctx.status = 301
  ctx.redirect(location)
  ctx.body = 'Redirecting...'
}

const main = async ctx => {
  const short = ctx.request.url.split('/').pop()
  const document = await shortActions.getByShortPath(short)

  return document ? redirect(ctx, document.originalUrl) : notFound(ctx)
}

app.use(main)

// to test locally, is there a better way?
if (!process.env.NOW_REGION) app.listen(3000)
module.exports = app.callback()
