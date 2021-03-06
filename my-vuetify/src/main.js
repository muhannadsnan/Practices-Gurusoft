import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import './stylus/main.styl'

Vue.use(Vuetify, {
  theme: {
    primary: "#f44336",
    secondary: "#e57373",
    accent: "#9c27b0",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
