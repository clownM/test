<template>
    <div class='orderlist-page'>
        <div class="container">
            <div class='_content'>
                <goback title='我的订单'></goback>
                <div class="content" id="content">
                    <div class="tabs-body" id="tabs-body">
                        <div class="tabs-head">
                            <ul class="tabs-ul">
                                <li>
                                    <span v-bind:class='{active:(0 == i || isActive == true)}' @click='tabsToggle(0)'>全部</span>
                                </li>
                                <li>
                                    <span v-bind:class='{active:1 == i}' @click='tabsToggle(1)'>待支付</span>
                                </li>
                                <li>
                                    <span v-bind:class='{active:2 == i}' @click='tabsToggle(2)'>制作中</span>
                                </li>
                                <li>
                                    <span v-bind:class='{active:3 == i}' @click='tabsToggle(3)'>配送中</span>
                                </li>
                                <li>
                                    <span v-bind:class='{active:4 == i}' @click='tabsToggle(4)'>已完成</span>
                                </li>
                            </ul>
                        </div>
                        <!-- 全部订单 -->
                        <div class="tabs-contents" v-bind:class='{active:(i == 0 || isActive == true)}'>
                            <div class="failorder" v-if="isEmpty(toscan_array) && isEmpty(topay_array) && isEmpty(printing_array) && isEmpty(delivering_array) && isEmpty(done_array)">
                                还没有相关的订单呢~
                            </div>
                            <div v-else>
                                <!-- 全部/待扫描 -->
                                <div class="order" v-for="(order,index) in toscan_array">
                                    <div class="order-header">
                                        <span class="orderno">订单编号: {{order.orderuuid}}</span>
                                        <span class="status">{{ order.status }}</span>
                                    </div>
                                    <div class="order-body">
                                        <div class="glass_pic">
                                            <img src="" alt="">
                                        </div>
                                        <div class="info">
                                            <div class="alia">
                                                <p class="alia">F157633</p>
                                                <p class="name">圆形复古镜框眼镜</p>
                                            </div>
                                            <div class="kezi">
                                                <p>镜腿刻字</p>
                                                <p>镜框整体定制</p>
                                            </div>
                                        </div>
                                        <div class="price">
                                            <span>￥890.00</span>
                                        </div>
                                        <!-- <div class="createdate">订单创建时间:
                                            <span v-text="order.createdate"></span>
                                        </div>
                                        <div class="station">预约扫描地址：
                                            <span v-text="order.station"></span>
                                        </div>
                                        <div class="appointmentdate">预约扫描时间：
                                            <span v-text="order.appointmentdate"></span>
                                        </div> -->
                                    </div>
                                    <div class="order-footer-price">
                                        <span>共一件商品 合计：￥890.00（含运费：￥0.00）</span>
                                    </div>
                                    <div class="order-footer">
                                        <button class="cancelOrder" @click='cancel(order.orderuuid)'>取消订单</button>
                                    </div>
                                </div>
                                <!--  全部/待支付-->
                                <div class="order" v-for="(deal,index) in topay_array">
                                    <div class="order-header">
                                        <span class="orderno">订单编号: {{order.orderuuid}}</span>
                                        <span class="status">{{ order.status }}</span>
                                    </div>
                                    <div class="order-body">
                                        <div class="glass_pic">
                                            <img src="" alt="">
                                        </div>
                                        <div class="info">
                                            <div class="alia">
                                                <p class="alia">F157633</p>
                                                <p class="name">圆形复古镜框眼镜</p>
                                            </div>
                                            <div class="kezi">
                                                <p>镜腿刻字</p>
                                                <p>镜框整体定制</p>
                                            </div>
                                        </div>
                                        <div class="price">
                                            <span>￥{{deal.price}}</span>
                                        </div>
                                        <!-- <div class="createdate">订单创建时间:
                                            <span v-text="order.createdate"></span>
                                        </div>
                                        <div class="station">预约扫描地址：
                                            <span v-text="order.station"></span>
                                        </div>
                                        <div class="appointmentdate">预约扫描时间：
                                            <span v-text="order.appointmentdate"></span>
                                        </div> -->
                                    </div>
                                    <div class="order-footer">
                                        <button class="cancelOrder" @click='cancel(order.orderuuid)'>取消订单</button>
                                        <button>立即付款</button>
                                    </div>
                                </div>
                                <!-- 全部/生产中 -->
                                <div class="order" v-for="(deal,index) in printing_array">
                                    <div class="order-header">
                                        <div></div>
                                        <div class="status" v-text="deal.status"></div>
                                    </div>
                                    <div class="order-body">
                                        <div class="orderuuid">orderuuid
                                            <span v-text="deal.orderuuid"></span>
                                        </div>
                                        <div class="dealuuid">dealuuid:
                                            <span v-text="deal.dealuuid"></span>
                                        </div>
                                        <div class="createdate">order创建时间:
                                            <span v-text="deal.orderCreatedate"></span>
                                        </div>
                                        <div class="station">预约扫描地址：
                                            <span v-text="deal.station"></span>
                                        </div>
                                        <div class="appointmentdate">预约扫描时间：
                                            <span v-text="deal.appointmentdate"></span>
                                        </div>
                                        <div class="scandate">实际扫描时间：
                                            <span v-text="deal.scandate"></span>
                                        </div>
                                        <div class="dealCreatedate">deal创建时间：
                                            <span v-text="deal.dealCreatedate"></span>
                                        </div>
                                        <div class="price" v-text="'合计： ￥ '+deal.price"></div>
                                    </div>
                                    <div class="order-footer">
                                        <button class="">催单</button>
                                        <button class="to_order_details" @click="toOrderDetails(deal.orderuuid,deal.dealuuid)">订单详情</button>
                                    </div>
                                </div>
                                <!-- 全部/待收货 -->
                                <div class="order" v-for="(deal,index) in delivering_array">
                                    <div class="order-header">
                                        <div></div>
                                        <div class="status" v-text="deal.status"></div>
                                    </div>
                                    <div class="order-body">
                                        <div class="orderuuid">orderuuid
                                            <span v-text="deal.orderuuid"></span>
                                        </div>
                                        <div class="dealuuid">dealuuid:
                                            <span v-text="deal.dealuuid"></span>
                                        </div>
                                        <div class="createdate">order创建时间:
                                            <span v-text="deal.orderCreatedate"></span>
                                        </div>
                                        <div class="station">预约扫描地址：
                                            <span v-text="deal.station"></span>
                                        </div>
                                        <div class="appointmentdate">预约扫描时间：
                                            <span v-text="deal.appointmentdate"></span>
                                        </div>
                                        <div class="scandate">实际扫描时间：
                                            <span v-text="deal.scandate"></span>
                                        </div>
                                        <div class="dealCreatedate">deal创建时间：
                                            <span v-text="deal.dealCreatedate"></span>
                                        </div>
                                        <div class="price" v-text="'合计： ￥ '+deal.price"></div>
                                    </div>
                                    <div class="order-footer">
                                        <button class="to_delivery" @click='toDelivery(deal.delivery_company,deal.delivery_postid)'>查看物流</button>
                                        <button class="">确认收货</button>
                                        <button class="to_order_details" @click="toOrderDetails(deal.orderuuid,deal.dealuuid)">订单详情</button>
                                    </div>
                                </div>
                                <!-- 全部/已收货 -->
                                <div class="order" v-for="(deal,index) in done_array">
                                    <div class="order-header">
                                        <div></div>
                                        <div class="status" v-text="deal.status"></div>
                                    </div>
                                    <div class="order-body">
                                        <div class="orderuuid">orderuuid
                                            <span v-text="deal.orderuuid"></span>
                                        </div>
                                        <div class="dealuuid">dealuuid:
                                            <span v-text="deal.dealuuid"></span>
                                        </div>
                                        <div class="createdate">order创建时间:
                                            <span v-text="deal.orderCreatedate"></span>
                                        </div>
                                        <div class="station">预约扫描地址：
                                            <span v-text="deal.station"></span>
                                        </div>
                                        <div class="appointmentdate">预约扫描时间：
                                            <span v-text="deal.appointmentdate"></span>
                                        </div>
                                        <div class="scandate">实际扫描时间：
                                            <span v-text="deal.scandate"></span>
                                        </div>
                                        <div class="dealCreatedate">deal创建时间：
                                            <span v-text="deal.dealCreatedate"></span>
                                        </div>
                                        <div class="price" v-text="'合计： ￥ '+deal.price"></div>
                                    </div>
                                    <div class="order-footer">
                                        <button class="to_order_details" @click="toOrderDetails(deal.orderuuid,deal.dealuuid)">订单详情</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 待扫描 -->
                        <div class="tabs-contents div-toscan" v-bind:class='{active:i == 1}'>
                            <div class="failorder" v-if="isEmpty(topay_array)">
                                还没有相关的订单呢~
                            </div>
                            <div v-else>
                                <div class="order" v-for="(order,index) in toscan_array">
                                    <div class="order-header">
                                        <div></div>
                                        <div class="status" v-text="order.status"></div>
                                    </div>
                                    <div class="order-body">
                                        <div class="orderuuid">orderuuid：
                                            <span v-text="order.orderuuid"></span>
                                        </div>
                                        <div class="createdate">订单创建时间:
                                            <span v-text="order.createdate"></span>
                                        </div>
                                        <div class="station">预约扫描地址：
                                            <span v-text="order.station"></span>
                                        </div>
                                        <div class="appointmentdate">预约扫描时间：
                                            <span v-text="order.appointmentdate"></span>
                                        </div>
                                    </div>
                                    <div class="order-footer">
                                        <button class="cancelOrder" @click='cancel(order.orderuuid)'>取消预约</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 待支付 -->
                        <div class="tabs-contents div-topay" v-bind:class='{active:i == 2}'>
                            <div class="failorder" v-if="isEmpty(topay_array)">
                                还没有相关的订单呢~
                            </div>
                            <div v-else>
                                <div class="order" v-for="(deal,index) in topay_array">
                                    <div class="order-header">
                                        <div></div>
                                        <div class="status" v-text="deal.status"></div>
                                    </div>
                                    <div class="order-body">
                                        <div class="orderuuid">
                                            orderuuid: <span>{{deal.orderuuid}}</span>
                                        </div>
                                        <div class="dealuuid">dealuuid:
                                            <span v-text="deal.dealuuid"></span>
                                        </div>
                                        <div class="createdate">order创建时间:
                                            <span v-text="deal.orderCreatedate"></span>
                                        </div>
                                        <div class="station">预约扫描地址：
                                            <span v-text="deal.station"></span>
                                        </div>
                                        <div class="appointmentdate">预约扫描时间：
                                            <span v-text="deal.appointmentdate"></span>
                                        </div>
                                        <div class="scandate">实际扫描时间：
                                            <span v-text="deal.scandate"></span>
                                        </div>
                                        <div class="dealCreatedate">deal创建时间：
                                            <span v-text="deal.dealCreatedate"></span>
                                        </div>
                                        <div class="price" v-text="'合计： ￥ '+deal.price"></div>
                                    </div>
                                    <div class="order-footer">
                                        <button class="">付款</button>
                                        <button class="to_order_details" @click="toOrderDetails(deal.orderuuid,deal.dealuuid)">订单详情</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 生产中 -->
                        <div class="tabs-contents div-printing" v-bind:class='{active:i == 3}'>
                            <div class="failorder" v-if="isEmpty(printing_array)">
                                还没有相关的订单呢~
                            </div>
                            <div v-else>
                                <div class="order" v-for="(deal,index) in printing_array">
                                    <div class="order-header">
                                        <div></div>
                                        <div class="status" v-text="deal.status"></div>
                                    </div>
                                    <div class="order-body">
                                        <div class="orderuuid">orderuuid
                                            <span v-text="deal.orderuuid"></span>
                                        </div>
                                        <div class="dealuuid">dealuuid:
                                            <span v-text="deal.dealuuid"></span>
                                        </div>
                                        <div class="createdate">order创建时间:
                                            <span v-text="deal.orderCreatedate"></span>
                                        </div>
                                        <div class="station">预约扫描地址：
                                            <span v-text="deal.station"></span>
                                        </div>
                                        <div class="appointmentdate">预约扫描时间：
                                            <span v-text="deal.appointmentdate"></span>
                                        </div>
                                        <div class="scandate">实际扫描时间：
                                            <span v-text="deal.scandate"></span>
                                        </div>
                                        <div class="dealCreatedate">deal创建时间：
                                            <span v-text="deal.dealCreatedate"></span>
                                        </div>
                                        <div class="price" v-text="'合计： ￥ '+deal.price"></div>
                                    </div>
                                    <div class="order-footer">
                                        <button class="">催单</button>
                                        <button class="to_order_details" @click="toOrderDetails(deal.orderuuid,deal.dealuuid)">订单详情</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 待收货 -->
                        <div class="tabs-contents div-delivering" v-bind:class='{active:i == 4}'>
                            <div class="failorder" v-if="isEmpty(delivering_array)">
                                还没有相关的订单呢~
                            </div>
                            <div v-else>
                                <div class="order" v-for="(deal,index) in delivering_array">
                                    <div class="order-header">
                                        <div></div>
                                        <div class="status" v-text="deal.status"></div>
                                    </div>
                                    <div class="order-body">
                                        <div class="orderuuid">orderuuid
                                            <span v-text="deal.orderuuid"></span>
                                        </div>
                                        <div class="dealuuid">dealuuid:
                                            <span v-text="deal.dealuuid"></span>
                                        </div>
                                        <div class="createdate">order创建时间:
                                            <span v-text="deal.orderCreatedate"></span>
                                        </div>
                                        <div class="station">预约扫描地址：
                                            <span v-text="deal.station"></span>
                                        </div>
                                        <div class="appointmentdate">预约扫描时间：
                                            <span v-text="deal.appointmentdate"></span>
                                        </div>
                                        <div class="scandate">实际扫描时间：
                                            <span v-text="deal.scandate"></span>
                                        </div>
                                        <div class="dealCreatedate">deal创建时间：
                                            <span v-text="deal.dealCreatedate"></span>
                                        </div>
                                        <div class="price" v-text="'合计： ￥ '+deal.price"></div>
                                    </div>
                                    <div class="order-footer">
                                        <button class="to_delivery" @click='toDelivery(deal.delivery_company,deal.delivery_postid)'>查看物流</button>
                                        <button class="">确认收货</button>
                                        <button class="to_order_details" @click="toOrderDetails(deal.orderuuid,deal.dealuuid)">订单详情</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import goback from "@/components/goback";
// import navbar from "@/components/navbar";
// import navLeft from '@/components/nav_left'
// import {mapState,mapMutations} from 'vuex';
import {baseUrl} from '../../config/env'
import { queryOrder,cancelOrder,queryDeal } from "@/service/getData"
import {formatDate,getStatus} from '../../config/fswear'
import {getCookie,setSessionStore} from '../../config/utils'

export default {
  data() {
    return {
      marginLeft:0,
      ordersArray: [],
      toscan_array: [],
      topay_array: [],
      printing_array: [],
      delivering_array: [],
      done_array: [],

      i: 0,
      isActive:true,

      userInfo:null
    };
  },
  mounted() {
    this.initData();
  },
  components: {
    goback
  },
  computed: {
    //   ...mapState([
    //       'userInfo'
    //   ]),
  },
  methods: {
    // ...mapMutations([
    //     'ORDEROBJ',
    //     'DEALOBJ',
    //     'SAVE_DELIVERY'
    // ]),
    async initData() {
        // if(getCookie('UserUUID')){
        //     if (!this.userInfo) {
        //         this.$store.dLeftatch('getUserInfo');
        //     }
        // }
        let user_url = baseUrl+'/user?action=query&uuid=4e9d3d679c50d7c5066768b8178b6814&orders';
        this.$http.get(user_url).then(response => {
            let orders = response.data.orders;
            orders.forEach(async (orderuuid) => {
            let res = await queryOrder(orderuuid);
            let deals = res.deals;         
            if(res){
                // 待扫描
                if(res.status == 'toscan'){
                    this.toscan_array.push({
                        'orderuuid':orderuuid,
                        'createdate':formatDate(res.createdate,'long_'),
                        'station':res.station,
                        'appointmentdate':formatDate(res.appointmentdate,'long_'),
                        'scandate':formatDate(res.scandate,'long_'),
                        'status':'等待扫描'
                    })
                }else{
                    if(deals.length !== 0){
                        deals.forEach(async (dealuuid) => {
                            let dealobj = await queryDeal(dealuuid);
                            /* 待支付 */
                            if(dealobj.paymentstatus == 'topay'){
                                this.topay_array.push({
                                    'orderuuid':orderuuid,
                                    'dealuuid':dealuuid,
                                    'station': res.station,
                                    'status':'待支付',
                                    'price':dealobj.price,
                                    'appointmentdate':formatDate(res.appointmentdate,'long_'),
                                    'scandate':formatDate(res.scandate,'long_'),
                                    'orderCreatedate':formatDate(res.createdate,'long_'),
                                    'dealCreatedate':formatDate(dealobj.createdate,'long_'),
                                    'discount':dealobj.discount
                                })
                            /* 生产中 */
                            }else if(dealobj.paymentstatus == 'paid' && dealobj.status == 'printing'){
                                this.printing_array.push({
                                    'orderuuid':orderuuid,
                                    'dealuuid':dealuuid,
                                    'station': res.station,
                                    'status': '生产中',
                                    'price':dealobj.price,
                                    'appointmentdate':formatDate(res.appointmentdate,'long_'),
                                    'scandate':formatDate(res.scandate,'long_'),
                                    'orderCreatedate':formatDate(res.createdate,'long_'),
                                    'dealCreatedate':formatDate(dealobj.createdate,'long_'),
                                    'discount':dealobj.discount
                                })
                            /* 运输中 */
                            }else if(dealobj.paymentstatus == 'paid' && dealobj.status == 'delivering'){
                                let delivery = dealobj.delivery;
                                let delivery_company = '';
                                let delivery_postid = '';
                                delivery = JSON.parse(delivery);
                                if (delivery.postprocessing_delivery == undefined) {
                                    delivery_company = delivery.production_delivery.courier_company;
                                    delivery_postid = delivery.production_delivery.courier_number;
                                } else {
                                    delivery_company = delivery.postprocessing_delivery.courier_company;
                                    delivery_postid = delivery.postprocessing_delivery.courier_number;
                                }
                                this.delivering_array.push({
                                    'orderuuid':orderuuid,
                                    'dealuuid':dealuuid,
                                    'station': res.station,
                                    'status': '运输中',
                                    'price':dealobj.price,
                                    'appointmentdate':formatDate(res.appointmentdate,'long_'),
                                    'scandate':formatDate(res.scandate,'long_'),
                                    'orderCreatedate':formatDate(res.createdate,'long_'),
                                    'dealCreatedate':formatDate(dealobj.createdate,'long_'),
                                    'discount':dealobj.discount,
                                    'delivery_company':delivery_company,
                                    'delivery_postid': delivery_postid
                                })
                            /* 已完成 */
                            }else if(dealobj.paymentstatus == 'paid' && dealobj.status =='done'){
                                this.done_array.push({
                                    'orderuuid':orderuuid,
                                    'dealuuid':dealuuid,
                                    'station': res.station,
                                    'status': '交易完成',
                                    'price':dealobj.price,
                                    'appointmentdate':formatDate(res.appointmentdate,'long_'),
                                    'scandate':formatDate(res.scandate,'long_'),
                                    'orderCreatedate':formatDate(res.createdate,'long_'),
                                    'dealCreatedate':formatDate(dealobj.createdate,'long_'),
                                    'discount':dealobj.discount
                                })
                            }
                        })
                    }
                }
            }
        });
        },response => {
            console.log('查询用户信息失败',response)
        })
        // console.log(this.userInfo);
        // let orders = this.userInfo.orders;
         
    },
    isEmpty(array) {
      if (array.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    tabsToggle(index) {
      this.i = index;
      this.isActive = false;
      document.body.scrollTop = 0;//切换tabs滚动条回到顶部
    },
    // 取消预约order
    async cancel(orderuuid){
        let res = await cancelOrder(orderuuid);
        if(res.result = 'true'){
            alert('订单取消成功');
        }else{
            alert('取消失败');
        }
    },
    // 订单详情
    async toOrderDetails(orderuuid,dealuuid){
        let orderobj = await queryOrder(orderuuid);
        let dealobj = await queryDeal(dealuuid);
        // this.ORDEROBJ(orderobj);
        // this.DEALOBJ(dealobj);
        setSessionStore('orderuuid',orderuuid);
        setSessionStore('dealuuid',dealuuid);
        this.$router.push('/orderlist/orderDetails');
    },
    //查看物流
    toDelivery(company,postid){
        // this.SAVE_DELIVERY({company:company,postid:postid});
        setSessionStore('delivery_company',company);
        setSessionStore('delivery_postid',postid)
        this.$router.push('/delivery')
    },
  },
  watch: {
    // userInfo: function (value){
    //     this.initData()
    // }
  }
};
</script>

<style lang='scss'>
@import "../../style/common";
// @import '../../style/fswear';
.orderlist-page{
    width:100%;
}
.tabs-body{
    .tabs-head {
        width: 100%;
        height: 60px;
        background-color: #fff;
        position: fixed;
        z-index: 103;
        top: 88px;
        padding-left: 23px;
        padding-right: 23px;
        border-top: 2px solid rgb(242, 242, 242);
        ul{
            display: flex;
            justify-content: space-between;
            li{
                span{
                    display: block;
                    height: 60px;
                    line-height: 60px;
                    padding-left: 23px;
                    padding-right: 23px;
                    font-size: 28px;
                }
            }
        }
    }
    .tabs-contents{
        display: none;
        top: 170px;
        // padding-top: 158px;
        // background-color: rgb(100, 100, 100);
    }
}

.tabs-head ul li span:hover,
.tabs-head ul li span.active {
    border-bottom: 3px solid rgb(73, 144, 238);
}

.tabs-body > div.active {
    display: block;
}

.tabs-contents .order {
    margin-bottom: 20px;
    background-color: #fff;
}

.order .order-header {
    width: 100%;
    height: 88px;
    line-height: 88px;
    // display: flex;
    // justify-content: space-between;
    padding-left: 46px;
    padding-right: 46px;
    border-bottom: 2px solid rgb(242, 242, 242);
}

.order .order-body {
    padding-left: 46px;
    padding-right: 46px;
    display: flex;
    .glass-pic{
        width: 182px;
        height: 182px;
        margin-right: 28px;
    }
    .info{
        flex:1;
        display: flex;
        flex-direction: vertical;
        justify-content: space-between;
        .alia{
            flex:1;
        }
        .kezi{
            flex:1;
        }
    }
    .price{
        flex:1;
        font-size: 30px;
        color:rgb(248, 92, 92);
    }
}
.order .order-footer-price{
    height: 90px;
    line-height: 90px;
    padding-right: 46px;
    float:right;
    font-size: 24px;
}
.order .order-footer {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: flex-end;
    padding-right: 46px;
    border-top: 1px solid #ccc;
    font-size: 30px;    
    // font-family: "NotoSansHans-Light";
    button{
        width: 200px;
        height: 68px;
        margin-top: 26px;
        border: none;
        margin-left: 11px;
    }
    button:nth-child(even){
        background-color: rgb(73, 144, 238);
        color:rgb(255, 255, 255);
    }
    button:nth-child(odd){
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(73, 144, 238);
        color:rgb(73, 144, 238);
    }
}
.failorder {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 30px;
    color:rgb(112, 112, 112);
}
.price {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: right;
  border-top: 1px solid rgb(240, 240, 240);
}
.tabs-contents {
  position: relative;
}
</style>
