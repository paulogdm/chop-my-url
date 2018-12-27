const POST_URL = '/'
let LATEST_SHORT = null

/**
 * This function is responsible for a POST request to our API.
 * @return {[type]} [description]
 */
const send = async () => {
  // retrieving value from DOM
  const input = document.getElementById('input').value

  // any problems, including parsing issues, will be handled
  try {
    const rawResponse = await fetch(POST_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ originalUrl: input })
    })
    // parsing the raw response to a json format
    const { shortUrl } = await rawResponse.json()
    // set global variable
    LATEST_SHORT = shortUrl
  } catch (err) {
    console.error('🚑', `${err}`)
  }

  // after our request, it should update the DOM to show the short url
  updateCopyField()
}

/**
 * A simple helper to update the DOM, showing the short url.
 */
const updateCopyField = () => {
  // if the variable exists and is different from undefined.
  if (LATEST_SHORT) {
    const target = document.getElementById('output-url')
    document.getElementById('output').classList.remove('hidden')
    target.innerText = LATEST_SHORT
  }
}

/**
 * It saves the short url to the user clipboard.
 */
const copy = async () => {
  // if the variable exists and is different from undefined.
  if (LATEST_SHORT) {
    // querying the DOM element
    const target = document.getElementById('output')

    // animating with Animate.css
    target.classList.add('animated')
    target.classList.add('rubberBand')

    // remove after animation stops
    window.setTimeout(() => {
      target.classList.remove('animated')
      target.classList.remove('rubberBand')
    }, 1000)

    await navigator.clipboard.writeText(LATEST_SHORT)
  }
}


/**
 * attach events on load
 */
window.addEventListener('load', () => {
  // add events
  document.getElementById('chop-it').addEventListener('click', send)
  document.getElementById('output').addEventListener('click', copy)
})
