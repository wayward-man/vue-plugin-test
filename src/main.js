import Vue from 'vue'
import App from './App.vue'
import VuePlugin from './lib/index';

Vue.use(VuePlugin);

new Vue({
  el: '#app',
  render: h => h(App)
})
