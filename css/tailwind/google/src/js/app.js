import Vue from 'vue'

import SearchResults from './components/SearchResults.vue'
import TabItem from './components/TabItem.vue'
import Tabs from './components/Tabs.vue'

const app = new Vue({
    el: '#app',

    components: {
        SearchResults,
        TabItem,
        Tabs
    }
})
