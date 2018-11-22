const notFound = async ctx => {
  ctx.status = 404
}

const redirect = async ctx => {
  ctx.status = 301
  // TO DO
  ctx.redirect('https://google.com')
  ctx.body = 'Redirecting to shopping cart'
}

app.use(async ctx => {
  const short = ctx.request.url.split('/').pop()

})

module.exports = app.callback()
