const use = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('Error', err, ctx)
  }
}

const on = (err, ctx) => {
  console.error(err)
}

module.exports = {
  use,
  on
}
