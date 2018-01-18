import Vue from 'vue'
import delivery from './delivery.vue'
import 'lib-flexible'

Vue.config.productionTip = false

new Vue({
    el:'#delivery',
    render:h => h(delivery)
})