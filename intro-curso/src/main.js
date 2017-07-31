import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Ejemplo de filtro global
Vue.filter('reverse', (value) => {
  return value.split('').reverse().join('')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
