<template>
  <div id="app">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main>
      <a @click="push" id="demo_button" href="#" class="button">Press to Push</a>
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Push from 'push.js'
// import PushFCM from 'push-fcm-plugin'
// import firebaseConfig from './firebase.conf'
import firebase from 'firebase';

function demo () {
  Push.create('Hello world!', {
    body: 'How\'s it hangin\'?',
    icon: './static/img/icons/favicon-16x16.png',
    link: '/#',
    timeout: 4000,
    requireInteraction: true,
    onClick: function () {
      console.log('Fired!')
      window.focus()
      this.close()
    },
    vibrate: [200, 100, 200, 100, 200, 100, 200]
  })
}

function printToken(token) {
  console.log('token', token)
  var message = document.createElement('div')
  message.innerText = token
  document.body.appendChild(message)
  return token;
}

export default {
  name: 'app',
  methods: {
    push: demo
  },
  beforeCreate () {
    const messaging = firebase.messaging();

    navigator.serviceWorker.register('./firebase-messaging-sw.js')
    .then(registration => messaging.useServiceWorker(registration))
    .then(messaging.requestPermission)
    // messaging.requestPermission()
    .then( () => console.log('Have permission'))
    .then( () => messaging.getToken())
    .then(printToken)
    .catch(printToken)

    messaging.onMessage(function handleMessage(payload) {
      console.log('message', payload)
    })

    // extend push before adding configuration

  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
#demo_button {
  background-image: linear-gradient(145deg, #667eea 0%, #764ba2 100%);
  border-radius: 100px;
  font-weight: 400;
  font-size: 0.75em;
  line-height: 4em;
  width: 20em;
  margin: 35px auto;
  display: block;
  text-align: center;
  box-shadow: 0 2px 25px rgba(0,0,0,0.1);
  position: relative;
  z-index: 100;
  cursor: pointer;
}

</style>
