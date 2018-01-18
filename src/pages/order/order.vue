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
                                <!--  全部/待支付-->
                                <div class="order" v-for="(deal,index) in topay_array">
                                    <div class="order-header">
                                        <span class="orderno">订单号: {{deal.dealuuid}}</span>
                                        <span class="status">{{ deal.status }}</span>
                                    </div>
                                    <div class="order-body">
                                        <div class="glass-pic">
                                            <img src="../../img/frame/calliope_md18-01.png" alt="">
                                        </div>
                                        <div class="info">
                                            <div class="alias">
                                                <p class="alias">F157633</p>
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
                                    </div>
                                    <div class="order-footer-price">
                                        <p>共一件商品 合计：￥{{deal.price}} （含运费：￥0.00）</p>
                                    </div>
                                    <div class="order-footer">
                                        <button class="cancelOrder" @click='cancel()'>取消订单</button>
                                        <button>立即付款</button>
                                    </div>
                                </div>
                                <!-- 全部/制作中 -->
                                <div class="order" v-for="(deal,index) in printing_array">
                                    <div class="order-header">
                                        <span class="orderno">订单号: {{deal.dealuuid}}</span>
                                        <span class="status">{{ deal.status }}</span>
                                    </div>
                                    <div class="order-body">
                                        <div class="glass-pic">
                                            <img src="../../img/frame/calliope_md18-01.png" alt="">
                                        </div>
                                        <div class="info">
                                            <div class="alias">
                                                <p class="alias">F157633</p>
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
                                    </div>
                                    <div class="order-footer-price">
                                        <p>共一件商品 合计：￥{{deal.price}} （含运费：￥0.00）</p>
                                    </div>
                                    <div class="order-footer">
                                        <button>催单</button>
                                    </div>
                                </div>
                                <!-- 全部/配送中 -->
                                <div class="order" v-for="(deal,index) in delivering_array">
                                    <div class="order-header">
                                        <span class="orderno">订单号: {{deal.dealuuid}}</span>
                                        <span class="status">{{ deal.status }}</span>
                                    </div>
                                    <div class="order-body">
                                        <div class="glass-pic">
                                            <img src="../../img/frame/calliope_md18-01.png" alt="">
                                        </div>
                                        <div class="info">
                                            <div class="alias">
                                                <p class="alias">F157633</p>
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
                                    </div>
                                    <div class="order-footer-price">
                                        <p>共一件商品 合计：￥{{deal.price}} （含运费：￥0.00）</p>
                                    </div>
                                    <div class="order-footer">
                                        <button>查看物流</button>
                                        <button>确认收货</button>
                                    </div>
                                </div>
                                <!-- 全部/已完成 -->
                                <div class="order" v-for="(deal,index) in done_array">
                                    <div class="order-header">
                                        <span class="orderno">订单号: {{deal.dealuuid}}</span>
                                        <span class="status">{{ deal.status }}</span>
                                    </div>
                                    <div class="order-body">
                                        <div class="glass-pic">
                                            <img src="../../img/frame/calliope_md18-01.png" alt="">
                                        </div>
                                        <div class="info">
                                            <div class="alias">
                                                <p class="alias">F157633</p>
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
                                    </div>
                                    <div class="order-footer-price">
                                        <p>共一件商品 合计：￥{{deal.price}} （含运费：￥0.00）</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 待支付 -->
                        <div class="tabs-contents div-topay" v-bind:class='{active:i == 1}'>
                            <div class="failorder" v-if="isEmpty(topay_array)">
                                还没有相关的订单呢~
                            </div>
                            <div v-else>
                                <div class="order" v-for="(deal,index) in topay_array">
                                    <div class="order-header">
                                        <span class="orderno">订单号: {{deal.dealuuid}}</span>
                                        <span class="status">{{ deal.status }}</span>
                                    </div>
                                    <div class="order-body">
                                        <div class="glass-pic">
                                            <img src="../../img/frame/calliope_md18-01.png" alt="">
                                        </div>
                                        <div class="info">
                                            <div class="alias">
                                                <p class="alias">F157633</p>
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
                                    </div>
                                    <div class="order-footer-price">
                                        <p>共一件商品 合计：￥{{deal.price}} （含运费：￥0.00）</p>
                                    </div>
                                    <div class="order-footer">
                                        <button class="cancelOrder" @click='cancel()'>取消订单</button>
                                        <button>立即付款</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 制作中 -->
                        <div class="tabs-contents div-printing" v-bind:class='{active:i == 2}'>
                            <div class="failorder" v-if="isEmpty(printing_array)">
                                还没有相关的订单呢~
                            </div>
                            <div v-else>
                                <div class="order" v-for="(deal,index) in printing_array">
                                    <div class="order-header">
                                        <span class="orderno">订单号: {{deal.dealuuid}}</span>
                                        <span class="status">{{ deal.status }}</span>
                                    </div>
                                    <div class="order-body">
                                        <div class="glass-pic">
                                            <img src="../../img/frame/calliope_md18-01.png" alt="">
                                        </div>
                                        <div class="info">
                                            <div class="alias">
                                                <p class="alias">F157633</p>
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
                                    </div>
                                    <div class="order-footer-price">
                                        <p>共一件商品 合计：￥{{deal.price}} （含运费：￥0.00）</p>
                                    </div>
                                    <div class="order-footer">
                                        <button>催单</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 配送中 -->
                        <div class="tabs-contents div-delivering" v-bind:class='{active:i == 3}'>
                            <div class="failorder" v-if="isEmpty(delivering_array)">
                                还没有相关的订单呢~
                            </div>
                            <div v-else>
                                <div class="order" v-for="(deal,index) in delivering_array">
                                    <div class="order-header">
                                        <span class="orderno">订单号: {{deal.dealuuid}}</span>
                                        <span class="status">{{ deal.status }}</span>
                                    </div>
                                    <div class="order-body">
                                        <div class="glass-pic">
                                            <img src="../../img/frame/calliope_md18-01.png" alt="">
                                        </div>
                                        <div class="info">
                                            <div class="alias">
                                                <p class="alias">F157633</p>
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
                                    </div>
                                    <div class="order-footer-price">
                                        <p>共一件商品 合计：￥{{deal.price}} （含运费：￥0.00）</p>
                                    </div>
                                    <div class="order-footer">
                                        <button @click="toDelivery(deal.delivery_company,deal.delivery_postid)">查看物流</button>
                                        <button>确认收货</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 已完成 -->
                        <div class="tabs-contents div-done" v-bind:class='{active:i == 4}'>
                            <div class="failorder" v-if="isEmpty(done_array)">
                                还没有相关的订单呢~
                            </div>
                            <div v-else>
                                <div class="order" v-for="(deal,index) in done_array">
                                    <div class="order-header">
                                        <span class="orderno">订单号: {{deal.dealuuid}}</span>
                                        <span class="status">{{ deal.status }}</span>
                                    </div>
                                    <div class="order-body">
                                        <div class="glass-pic">
                                            <img src="../../img/frame/calliope_md18-01.png" alt="">
                                        </div>
                                        <div class="info">
                                            <div class="alias">
                                                <p class="alias">F157633</p>
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
                                    </div>
                                    <div class="order-footer-price">
                                        <p>共一件商品 合计：￥{{deal.price}} （含运费：￥0.00）</p>
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

  },
  methods: {
    
    async initData() {
        var useruuid;
        await this.$http.get(baseUrl+'/user?action=login&phone=18812345678&username=20161210&password=qwerty123').then(response => {
            useruuid = response.data.uuid;
        },response => {
            console.log(response.data);
            
        })
        console.log(useruuid);
        
        let user_url = baseUrl+'/user?action=query&uuid='+useruuid+'&orders';
        this.$http.get(user_url).then(response => {
            console.log(response.data);                              //queryUser 
            let orders = response.data.orders;
            orders.forEach(async orderuuid => {
                let res = await queryOrder(orderuuid);
                let deals = res.deals;     
                if(deals.length !== 0){
                    deals.forEach(async (dealuuid) => {
                        let dealobj = await queryDeal(dealuuid);
                        /* 待支付 */
                        if(dealobj.paymentstatus == 'topay'){
                            this.topay_array.push({
                                'dealuuid':dealuuid,
                                'status':'待支付',
                                'price':dealobj.price,
                                'discount':dealobj.discount,
                                "LensProfileIdentifier":dealobj.config_literal.LensProfileIdentifier
                            })
                        /* 制作中 */
                        }else if(dealobj.paymentstatus == 'paid' && dealobj.status == 'printing'){
                            this.printing_array.push({
                                'dealuuid':dealuuid,
                                'status':'制作中',
                                'price':dealobj.price,
                                'discount':dealobj.discount,
                                "LensProfileIdentifier":dealobj.config_literal.LensProfileIdentifier
                            })
                        /* 配送中 */
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
                                'dealuuid':dealuuid,
                                'status':'配送中',
                                'price':dealobj.price,
                                'discount':dealobj.discount,
                                "LensProfileIdentifier":dealobj.config_literal.LensProfileIdentifier,
                                'delivery_company':delivery_company,
                                'delivery_postid': delivery_postid
                            })
                        /* 已完成 */
                        }else if(dealobj.paymentstatus == 'paid' && dealobj.status =='done'){
                            this.done_array.push({
                                'dealuuid':dealuuid,
                                'status':'已完成',
                                'price':dealobj.price,
                                'discount':dealobj.discount,
                                "LensProfileIdentifier":dealobj.config_literal.LensProfileIdentifier
                            })
                        }
                    })
                }
            });
        },response => {
            console.log('查询用户信息失败',response)
        })
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
        setSessionStore('orderuuid',orderuuid);
        setSessionStore('dealuuid',dealuuid);
        this.$router.push('/orderlist/orderDetails');
    },
    //查看物流
    toDelivery(company,postid){
        setSessionStore('delivery_company',company);
        setSessionStore('delivery_postid',postid);
        console.log(company,postid);
        
        window.location.href="./delivery.html";
    },
  },
};
</script>

<style lang='scss'>
@import "../../style/common";
.orderlist-page{
    width:100%;
    word-break: break-all;
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
    }
}

.tabs-head ul li span:hover,
.tabs-head ul li span.active {
    border-bottom: 4px solid rgb(73, 144, 238);
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
    padding-left: 46px;
    padding-right: 46px;
    border-bottom: 2px solid rgb(242, 242, 242);
    display: flex;
    justify-content: space-between;
}

.order .order-body {
    padding: 30px 46px;
    display: flex;
    .glass-pic{
        width: 182px;
        height: 182px;
        margin-right: 28px;
        display: flex;
        align-items: center;
        img{
            width: 100%;
        }
    }
    .info{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .price{
        height: 182px;
        flex:1;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        span{
            color:rgb(248, 92, 92);
        }
    }
}
.order .order-footer-price{
    width: 100%;
    height: 90px;
    line-height: 90px;
    padding-right: 46px;
    text-align: right;
    font-size: 24px;
    border-top: 1px solid rgb(229, 229, 229);
}
.order .order-footer {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: flex-end;
    padding-right: 46px;
    border-top: 1px solid rgb(229, 229, 229);
    font-size: 30px;    
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
// .price {
//   width: 100%;
//   height: 30px;
//   line-height: 30px;
//   text-align: right;
// }
.tabs-contents {
  position: relative;
}
</style>
