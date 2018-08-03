import Vue from 'vue'
import App from './App.vue'
import VuePlugin from '../index.js';
Vue.use(VuePlugin);

window.vm = new Vue({
  el: '#app',
  render: h => h(App)
})
