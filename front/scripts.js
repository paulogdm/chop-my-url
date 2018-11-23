const POST_URL = '/'
const LATEST_SHORT = null

const send = async () => {
  const input = document.getElementById('input').value
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
}

const updateCopyField = async () => {

}

const copy = async () => {
  if (LATEST_SHORT) {
    await navigator.clipboard.writeText(LATEST_SHORT)
  }
}
