<template>
    <div class="address-page">
        <goback title='地址管理'></goback>
        <div class="container">
            <section v-if="address_list">
                <section class="address-item" v-for="(item,index) in address_list">
                    <div class="info">
                        <div class='row1'>
                            <p class='name'>{{ item.name }}</p>
                            <p class='phone'>{{item.phone}}</p>
                        </div>
                        <div class='row2'>
                            <button class='default' 
                                :class="{active:item._default == '1'}"
                                @click="selectDefault(index)">
                                默认
                            </button>
                            <p class="address">{{ item.address }}</p>
                        </div>
                    </div>
                    <div class="edit">
                        <img src="../../img/icon/edit@3x.png" alt="">
                    </div>
                </section>
            </section>
            <section class="address_list-is-empty" v-else>
                <img src="../../img/address/address@3x.png" alt="">
                <p>收货地址在哪里</p>
            </section>
            <section class="addAddress">
                <button>+新建地址</button>
            </section>
        </div>
        
    </div>
</template>
<script>
import goback from '../../components/goback'
export default{
    data(){
        return{
            // address_list:[
            //     {
            //         name:'小明',
            //         phone: '188****5678',
            //         address:'浙江省杭州市西湖区文二西路益乐新村',
            //         _default:"1"
            //     },{
            //         name:'大头娃娃',
            //         phone: '188****5678',
            //         address:'河北省秦皇岛市海港区文化路368号国家税务局',
            //         _default:"0"
            //     }
            // ]
            address_list:null
        }
    },
    components:{
        goback
    },
    methods:{
        selectDefault(index){
            let arr = this.address_list;
            for (let i = 0; i < arr.length; i++) {
                arr[i]._default = "0"
            }
            arr[index]._default = "1";
        }
    }
}
</script>
<style lang='scss'>
.address-page{
    height: 100%;
    background-color: #fff;
    position: relative;
    .container{
        padding-top: 90px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        .address-item{
            width: 100%;
            padding: 20px 46px;
            border-bottom: 2px solid rgb(240, 240, 240);
            display: flex;
            .info{
                flex:1;
                .row1{
                    display: flex;
                    .name,.phone{
                        font-size: 28px;
                        color:rgb(34, 34, 34);
                        display: inline-block;
                    }
                    .name{
                        width: 150px;
                    }
                    .phone{
                        flex: 1;
                    }
                }
                .row2{
                    margin-top: 20px;
                    display: flex;
                    .default,.address{
                        font-size: 24px;
                    }
                    .default{
                        width: 70px;
                        margin-right: 84px;
                        height: 40px;
                        background: #fff;
                        border: 2px solid rgb(112, 112, 112);
                        color:rgb(112, 112, 112);
                    }
                    .address{
                        color:rgb(112, 112, 112);
                    }
                    button.active{
                        border: 2px solid rgb(74, 144, 238);
                        color:rgb(74, 144, 238);
                    }
                }
            }
            .edit{
                width: 100px;
                text-align: right;
                display: flex;
                align-items: center;
                justify-content: flex-end;                
                img{
                    width: 38px;
                    height: 38px;
                }
            }
        }
        .address_list-is-empty{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img{
                width: 210px;
                margin-bottom: 30px;
            }
            p{
                font-size: 30px;
                color:rgb(170, 170, 170);
            }
        }
    }
    .addAddress{
        position: absolute;
        bottom: 48px;
        width: 100%;
        display: flex;
        justify-content: center;
        button{
            width: 640px;
            height: 80px;
            background-color: #fff;
            border: 2px solid rgb(74, 144, 238);
            color:rgb(74, 144, 238);
            font-size: 28px;
        }
    }
}
</style>

