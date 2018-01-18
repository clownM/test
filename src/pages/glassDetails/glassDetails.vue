<template>
    <div class="glassDetails-page">
        <section class="goback" @click="goBack()">
            <i class='el-icon-arrow-left'></i>
        </section>
        <section class="goCart" @click='goCart()'>
        </section>
        <section class='glass-pic'>

        </section>
        <section class='color'>
            <div class="color-item" v-for="color in colorArr">
                <button class="color-block" :style="{backgroundColor:color.color}">
                </button>
                <p class="color-name">
                    {{ color.name }}
                </p>
            </div>
        </section>
        <section class='info'>
            <b>夏洛克光学镜-B</b>
            <p>优雅英伦造型，优良材质，佩戴舒适</p>
            <div>
                <div class='gantan'></div>
                <span>技术规格</span>
                <div class="yiwen"></div>
                <span>需要帮助</span>
            </div>
        </section>
        <section class="price">
            <p>RMB&nbsp;&nbsp;<span>699.00</span></p>
        </section>
        <section class='btn'>
            <button>可先进行试戴扫描，后提交配镜度数</button>
        </section>
        <section class="selectLens">
            <p class="title">选择光学镜片</p>
            <p class='bupeijing'>不配镜（含镜架定型片）</p>
            <div class="radio-wrap">
                <div class="radio active">只买镜架</div>
                <div class="radio">标准版</div>
                <div class="radio">轻薄版</div>
                <div class="radio">超轻薄版</div>
            </div>
        </section>
        <section class="customization">
            <p class="title">个性化定制</p>
            <section class="haqibiao">
                <p class="title">哈气标</p>
                <p class="description">哈气标是用精细工艺纂刻在镜片上的隐藏标志。正常情况下透明不可见，对视觉无任何影响，当有水汽的时候会自动显现【定制产品非质量问题不接受退换货】</p>
                <div></div>
            </section>
            <section class="kezi">
                <p class="title">镜腿刻字</p>
                <p class="description">采用移印工艺，精工印刷在左镜腿外侧，自由定制，展现独一无二的你【定制产品非质量问题不接受退换货】</p>
            </section>
        </section>
        <section class="footer-fixed">
            <div class="left-icon"></div>
            <button class="addToCart" @click="addToCart()">加入购物车</button>
            <button class="goToScan">立即扫描</button>
        </section>
    </div>
</template>
<script>

export default{
    data(){
        return{ 
            colorArr:[
                {
                    color:"rgb(233, 175, 18)",
                    name:'土豪金'
                },{
                    color:"rgb(233, 175, 18)",
                    name:'土豪金'
                },{
                    color:"rgb(233, 175, 18)",
                    name:'土豪金'
                },{
                    color:"rgb(233, 175, 18)",
                    name:'土豪金'
                },{
                    color:"rgb(233, 175, 18)",
                    name:'土豪金'
                },{
                    color:"rgb(233, 175, 18)",
                    name:'土豪金'
                },{
                    color:"rgb(233, 175, 18)",
                    name:'土豪金'
                },{
                    color:"rgb(233, 175, 18)",
                    name:'土豪金'
                }

            ]
        }
    },
    mounted(){
        this.initData();
    },
    computed:{
    },
    methods:{
        async initData(){
            this.alias = this.$route.query.alias;
            let frame_profiles = this.frameProfiles;
            frame_profiles.alias.forEach((val,index) => {
                if(val == this.alias){
                    this.index = index;
                    this.material = frame_profiles.material[index];
                    this.data = frame_profiles.data[index];
                }
            });
        },
        goBack(){
            this.$router.go(-1);
        },
        goCart(){
            this.$router.push('/shoppingCart');
        },
        goTryOn(){
            console.log('试戴');
            var obj={op:'try_on',glassName:this.alias};
            var str = JSON.stringify(obj);
            window.postMessage(str,'*');
        },
        addToCart(){
            console.log('加入购物车');
            let index = this.index;
            let alias = this.alias;
            let material = this.material;
            let data = this.data;
            this.ADD_CART({ index,alias,data,material });
            this.$message({
                message:'成功加入购物车！',
                type:'success'
            });
        },
    },
}
</script>
<style lang='scss'>
@import '../../style/common';
    .glassDetails-page{
        position: relative;
        background-color: #fff;
        margin-bottom: 60px;
        .glass-pic{
            width: 100%;
            height: 565px;
            background-color: rgb(235, 235, 235);
            background-image: url('../../img/frame/galileo_md18-01.png');
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
        }
        .color{
            padding-left: 88px;
            padding-right: 88px;
            padding-top: 52px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .color-item{
                width: 25%;
                .color-block{
                    width: 68px;
                    height: 68px;
                    border-radius: 50%;
                    margin: 4px auto;
                }   
                .color-name{
                    text-align: center;
                    font-size: 22px;
                    color: rgb(34, 34, 34);
                    margin-top: 16px;
                    margin-bottom: 32px;
                }
            }
        }
        .info{
            margin-top: 42px;
            text-align: center;
            b{
                font-size: 38px;
                font-weight: 600;
                color:rgb(34, 34, 34);
            }
            p{
                font-size: 24px;
                color: rgb(170, 170, 170);
                margin-top: 20px;
            }
            div{
                margin-top: 24px;
                div.gantan,div.yiwen{
                    display: inline-block;
                    width: 26px;
                    height: 26px;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .gantan{
                    background-image: url('../../img/icon/gantan@3x.png');
                }
                .yiwen{
                    background-image: url('../../img/icon/yiwen@3x.png');
                    margin-left: 60px;
                }
                span{
                    font-size: 26px;
                    color: rgb(34, 34, 34);
                }
            }
        }
        .price{
            margin-top: 54px;
            font-size: 30px;
            text-align: center;
            span{
                font-size: 48px;
                color: rgb(73, 144, 238);
            }
        }
        .btn{
            margin-top: 66px;
            text-align: center;
            button{
                width: 508px;
                height: 60px;
                background-color: rgb(73, 144, 238);
                color: #fff;
                font-size: 24px;
                border-radius: 30px;
            }
        }
        .selectLens{
            text-align: center;
            margin-top: 66px;
            .title{
                font-size: 34px;
                color: rgb(170, 170, 170);
            }
            .bupeijing{
                font-size: 24px;
                color: rgb(34, 34, 34);
            }
            .radio-wrap{
                width: 508px;
                margin: 24px auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .radio{
                    width: 210px;
                    height: 82px;
                    margin-top: 30px;
                    line-height: 82px;
                    border: 2px solid rgb(170, 170, 170);
                    color:rgb(170, 170, 170);
                    font-size: 24px;
                    float: right;
                }
                .active{
                    border: 2px solid rgb(73, 144, 238);
                    color:rgb(73, 144, 238);
                }
            }

        }
        .customization{
            width: 645px;
            margin: 78px auto;
            .title{
                font-size: 34px;
                color: rgb(170, 170, 170);
                font-weight: 700;
                text-align: center;
            }
            .haqibiao,.kezi{
                .title{
                    text-align: center;
                    font-size: 30px;
                    color: rgb(73, 144, 238);
                    margin-top: 44px;
                }
                .description{
                    text-align: center;
                    font-size: 24px;
                    color: rgb(170, 170, 170);
                    margin-top: 28px;
                
                }
                div{
                    width: 200px;
                    height: 200px;
                    // border: 1px solid #ccc;
                    border-image: -webkit-linear-gradient(red blue) 2 8; 
                }
            }
        }
        .footer-fixed{
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: 102;
            width: 100%;
            height: 100px;
            display: flex;
            border-top: 2px solid rgb(235, 235, 235);
            .left-icon{
                flex: 1;
                background-color: #fff;
            }
            .addToCart,.goToScan{
                width: 200px;
                height: 100px;
                font-size: 32px;
            }
            .addToCart{
                border-left: 2px solid rgb(235, 235, 235);
                color: rgb(73, 144, 238);
                background-color: #fff;
            }
            .goToScan{
                background-color: rgb(73, 144, 238);
                color:#fff;
            }
        }
        .goback,.goCart{
            position: absolute;
            top: 10px;
            width: 30px;
            height: 30px;
            line-height: 30px;
            border-radius: 50%;
            background-color: rgba($color: #000000, $alpha: 0.7);
            text-align: center;
            .el-icon-arrow-left{
                color:#fff;
                font-size: 18px;
            }
        }
        .goback{
            left: 10px;
        }
        .goCart{
            right: 10px;
            // background-image: url('../../images/icons/购物车white.png');
            background-size: 18px 18px;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
</style>
