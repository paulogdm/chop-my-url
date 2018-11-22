const Koa = require('koa')
const responseTime = require('../middlewares/responseTime')

const app = new Koa()
app.use(responseTime)
