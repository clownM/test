import Vue from 'vue'
import mall from './mall.vue'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import vueResource from 'vue-resource';
import 'lib-flexible'

Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(vueResource);

new Vue({
    el:'#mall',
    render:h => h(mall)
})