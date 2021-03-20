console.log('Hello from the content-script')

const title = document.querySelector('title').innerText
const elem = document.createElement('h1')

chrome.runtime.onMessage.addListener((msg, _, responser) => {
  elem.textContent = 1111
  document.body.appendChild(elem)

  console.log('msg-content = ', msg)

  chrome.storage.local.get('privet', (response) => {
    console.log('privet', response)
  })

  responser({ test_content: true, title })

  return true
})
