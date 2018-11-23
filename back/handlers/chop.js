const Koa = require('koa')
const koaBody = require('koa-body')

const responseTime = require('../middlewares/responseTime')
const errorHandler = require('../middlewares/errorHandler')
const acceptedContentType = require('../middlewares/acceptedContentType')

const shortActions = require('../helpers/short')

const app = new Koa()
app.use(koaBody({ jsonLimit: '1kb' }))
app.use(responseTime)
app.use(errorHandler.use)
app.on('Error', errorHandler.on)
app.use(acceptedContentType)

const main = async ctx => {
  const { originalUrl } = ctx.request.body
  // mongo insert
  const { shortPath } = await shortActions.insert(originalUrl)
  // ctx.request.origin may no be suited for all cases
  // but here we glue the path with the origin url:
  // eg: https://chop.now.sh + / + abcdefghij
  const shortUrl = `${ctx.request.origin}/${shortPath}`
  ctx.body = { originalUrl, shortUrl }
}

app.use(main)

// to test locally, is there a better way?
if (!process.env.NOW_REGION) app.listen(3000)
module.exports = app.callback()
