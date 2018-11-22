module.exports = async (ctx, next) => {
  if (ctx.is('application/json')) {
    await next()
  } else {
    ctx.accepts('application/json')
  }
}
