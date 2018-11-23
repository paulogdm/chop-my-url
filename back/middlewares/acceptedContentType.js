/**
 * This middleware ensures that we are receiving a proper body.
 */
module.exports = async (ctx, next) => {
  if (ctx.is('application/json')) {
    await next()
  } else {
    ctx.status = 406
    ctx.accepts('application/json')
  }
}
