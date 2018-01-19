import Vue from 'vue'
import addAddress from './addAddress.vue'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css';
import 'lib-flexible'

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
    el:'#addAddress',
    render:h => h(addAddress)
})