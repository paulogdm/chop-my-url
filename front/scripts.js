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
    const content = await rawResponse.json()
    console.log(content)
    LATEST_SHORT = 'https://zeit.co'
  } catch (err) {
    console.error('🚑', `${err}`)
  }
}

const updateCopyField = async () => {

}

const copy = async () => {
  if (LATEST_SHORT) {
    await navigator.clipboard.writeText(LATEST_SHORT)
  }
}
