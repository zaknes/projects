import Vue from 'vue'

Vue.component('search-results', require('./components/SearchResults.vue'))
Vue.component('tab-item', require('./components/TabItem.vue'))
Vue.component('tabs', require('./components/Tabs.vue'))

const app = new Vue({
    el: '#app'
})
