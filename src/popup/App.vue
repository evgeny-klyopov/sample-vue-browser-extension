<template>
  <q-btn @click="first">First button</q-btn>
  <q-btn  @click="second">Second button</q-btn>
</template>

<script>
export default {
  name: 'App',
  methods: {
    first () {
      console.log('first click')

      chrome.runtime.sendMessage({ command: 'someData' }, (response) => {
        console.log('first response', response)
      })
    },
    second () {
      console.log('second click')

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { command: 'blabla' }, (response) => {
          console.log('second response', response)
        })
      })
    }
  }
}
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
