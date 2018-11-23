const POST_URL = '/'
let LATEST_SHORT = null

const send = async () => {
  const input = document.getElementById('input').value

  try {
    const rawResponse = await fetch(POST_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ originalUrl: input })
    })
    const { shortUrl } = await rawResponse.json()
    LATEST_SHORT = shortUrl
  } catch (err) {
    console.error('🚑', `${err}`)
  }

  updateCopyField()
}

const updateCopyField = () => {
  if (LATEST_SHORT) {
    const target = document.getElementById('output')
    target.innerHTML = `<i class="far fa-copy"></i> ${LATEST_SHORT}`
  }
}

const copy = async () => {
  if (LATEST_SHORT) {
    await navigator.clipboard.writeText(LATEST_SHORT)
  }
}
