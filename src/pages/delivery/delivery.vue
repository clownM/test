<template>
    <div class="delivery-page">
        <goback title='物流信息'></goback>
        <div class="wrap">
            <div class="title">
                <p>快递公司:{{ delivery_company }}</p>
                <p>快递单号:{{ delivery_postid }}</p>
            </div>
            <ul>
                <li v-for="info in delivery_info">
                    <p class="dot"></p>
                    <p v-text="info.date" class="date"></p>
                    <p v-text="info.context" class="context"></p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import goback from '../../components/goback'
    import {queryDelivery} from '../../service/getData'
    import {getSessionStore} from '../../config/utils'
    export default{
        data(){
            return{
                delivery_company:null,
                delivery_postid:null,
                delivery_info:[]
            }
        },
        mounted(){
          this.initData();
        },
        computed:{

        },
        components:{
            goback
        },
        methods:{
            async initData(){
                let delivery_company = getSessionStore('delivery_company');
                let delivery_postid = getSessionStore('delivery_postid');
                this.delivery_company = delivery_company;
                this.delivery_postid = delivery_postid;
                console.log(delivery_company,delivery_postid);
                let res = await queryDelivery(delivery_company,delivery_postid);
                res = JSON.parse(res.express);
                let datas = res.data;
                datas.forEach(data => {
                    this.delivery_info.push({
                        'date':data.time,
                        'context':data.context
                    })
                });
            }
        },
        watch:{
            userInfo:function(value){
                this.initData()
            }
        }
    }
</script>
<style lang='scss'>
    @import '../../style/common';
    .delivery-page{
        padding-bottom: 20px;        
        .wrap{
            min-height: 200px;
            margin-top: 108px;
            background-color: #fff;
            .title{
                padding-left: 46px;
                padding-right: 46px;
                height: 88px;
                line-height: 88px;
                font-size: 30px;
                display: flex;
                justify-content: space-between;
                border-bottom: 2px solid rgb(242, 242, 242);
            }
            ul{
                padding-left: 46px;
                padding-right: 46px;
                padding-top: 20px;
                padding-bottom: 20px;
                li{
                    border-top: 3px dotted #ccc;
                    border-left: 3px dashed rgb(2, 207, 243);
                    position: relative;
                    padding-left: 20px;
                    padding-top: 20px;
                    padding-bottom: 20px;
                    .dot{
                        position: absolute;
                        width: 20px;
                        height: 20px;
                        top: 50%;
                        left: -11px;
                        margin-top: -10px;
                        border-radius: 50%;
                        background-color: rgb(255, 90, 90);
                    }
                    .date,.context{
                        font-size: 24px;
                    }
                    .date{
                        font-weight: 800;
                    }
                } 
            }
        }
    }
</style>

