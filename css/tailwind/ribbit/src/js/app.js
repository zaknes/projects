import Vue from 'vue'
window.Vue = Vue

import Dropdown from './components/Dropdown.vue'
import PostCard from './components/PostCard.vue'

Vue.component('dropdown', Dropdown)
Vue.component('post-card', PostCard)

const app = new Vue({
  el: '#app',
})
