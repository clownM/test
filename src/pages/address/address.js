import Vue from 'vue'
import address from './address.vue'
import 'lib-flexible'

Vue.config.productionTip = false

new Vue({
    el:'#address',
    render:h => h(address)
})