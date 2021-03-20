chrome.runtime.onMessage.addListener((msg, _, responser) => {
  console.log('msg = ', msg)

  responser({ property_name: true })

  return true
})

// browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log('Hello from the background')
//
//   console.log('background request', request)
//   console.log('background sender', sender)
//   console.log('background sendResponse', sendResponse)
//
//   // browser.tabs.executeScript({
//   //   file: 'content-script.js'
//   // })
// })
