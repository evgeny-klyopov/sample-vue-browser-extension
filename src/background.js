chrome.runtime.onMessage.addListener(function (request, _, sendResponse) {
  console.log('Hello from the background')

  console.log('background request', request)

  sendResponse({ bla: 'bla' })
  return true
})
