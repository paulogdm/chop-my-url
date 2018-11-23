/**
 * This middleware benchmarks the response time of the server.
 */
module.exports = async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
}
