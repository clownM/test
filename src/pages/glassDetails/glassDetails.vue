<template>
    <div class="glassDetails-page">
        <section class="top-icon">
            <span class="return"></span>
            <span class="shop"></span>
            <span class="share"></span>
        </section>
        <section class='bgc-white'>
            <section class='glass-pic'></section>
            <section class='color'>
                <div class="color-item" v-for="(color,index) in colorArr" @click="selectColor(index)">
                    <div class="color-block" :class="{active:selectedColor == index}" :style="{background:color.color}"></div>
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
                    <div class="radio" :class="{active:selectedLens == 0}" @click="selectLens(0)">只买镜架</div>
                    <div class="radio" :class="{active:selectedLens == 1}" @click="selectLens(1)">标准版</div>
                    <div class="radio" :class="{active:selectedLens == 2}" @click="selectLens(2)">轻薄版</div>
                    <div class="radio" :class="{active:selectedLens == 3}" @click="selectLens(3)">超轻薄版</div>
                </div>
            </section>
            <section class="customization">
                <p class="title">个性化定制</p>
                <section class="haqibiao">
                    <p class="title">哈气标</p>
                    <p class="description">哈气标是用精细工艺纂刻在镜片上的隐藏标志。正常情况下透明不可见，对视觉无任何影响，当有水汽的时候会自动显现【定制产品非质量问题不接受退换货】</p>
                    <div class='flexwrap'>
                        <div class="shiyitu">
                            哈气标示意图
                        </div>
                        <div class="inputarea">
                            <p>左眼镜片</p>
                            <input type="text" placeholder="限3个大写字母或数字" maxlength="3">
                            <button>确定</button>
                        </div>
                    </div>
                </section>
                <section class="kezi">
                    <p class="title">镜腿刻字</p>
                    <p class="description">采用移印工艺，精工印刷在左镜腿外侧，自由定制，展现独一无二的你【定制产品非质量问题不接受退换货】</p>
                    <div class='flexwrap'>
                        <div class="shiyitu">
                            镜腿签名示意图
                        </div>
                        <div class="inputarea">
                            <p>左眼镜片</p>
                            <input type="text" placeholder="限3个大写字母或数字" maxlength="3">
                            <button>确定</button>
                        </div>
                    </div>
                </section>
            </section>
        </section>
        <!-- 评论 -->
        <section class="comment">
            <div class="title">
                <p>评论</p>
            </div>
            <div class="comment-wrap">
                <div class="comment-item" v-for='comment in comments'>
                    <p class="content">{{ comment.content }}</p>
                    <div class='comment-userinfo'>
                        <div class="avatar">
                            <img src="../../img/login/6.jpg" alt="">
                            <!-- <img :src="comment.avatar_path" alt=""> -->
                        </div>
                        <span class="username">{{ comment.username }}</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="footer-fixed">
            <div class="left-icon">
                <span class="cart"></span>
                <span class="liuyan"></span>
            </div>
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
                    color:"rgb(128, 138, 135)",
                    name:'深空灰'
                },{
                    color:"rgb(150, 67, 25)",
                    name:'玳瑁色'
                },{
                    color:"rgb(84, 108, 136)",
                    name:'雾霾蓝'
                },{
                    color:"rgb(220, 220, 220)",
                    name:'高级灰'
                },{
                    color:"linear-gradient(to right,rgb(233, 176, 20),rgb(254,254,193))  ",
                    name:'土豪金'
                },{
                    color:"linear-gradient(to right,#000,#fff)",
                    name:'钢铁灰'
                },{
                    color:"rgb(136, 171, 238)",
                    name:'天空蓝'
                },{
                    color:"rgb(112, 112, 112)",
                    name:'水泥灰'
                }
            ],
            selectedColor: 0,
            selectedLens:0,

            comments:[
                {
                    username:'潇湘雨夜',
                    avatar_path:'./static/img/6.jpg',
                    content:'眼镜很棒，打篮球时都不带晃的',
                },{
                    username:'半亩花田',
                    avatar_path:'../../img/login/6.jpg',
                    content:'东西很不错，好评',
                }
            ]
        }
    },
    mounted(){
        // this.initData();
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
        selectColor(index){
            this.selectedColor = index;
        },
        selectLens(index){
            this.selectedLens = index;
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
        padding-bottom: 120px;
        .bgc-white{
            background-color: #fff;
            padding-bottom: 20px;
        }
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
                    border: 8px solid #fff;
                }   
                div.active{
                    box-shadow: 0 0 30px 0 gray;
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
                .flexwrap{
                    display: flex;
                    margin-top: 40px;
                    .shiyitu{
                        width: 300px;
                        height: 300px;
                        line-height: 300px;
                        text-align: center;
                        border: 2px solid black;
                    }
                    .inputarea{
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        padding-left: 30px;
                        p{
                            font-size: 26px;
                            color:rgb(34, 34, 34);
                        }
                        input{
                            width: 312px;
                            height: 78px;
                            border-radius: 20px;
                            border:2px solid rgb(100, 100, 100);
                            margin-top: 28px;
                            padding-left: 20px;
                        }
                        input:-moz-placeholder,
                        input::-moz-placeholder,
                        input:-ms-input-placeholder,
                        input::-webkit-input-placeholder{
                            font-size: 22px;
                            color:rgb(170, 170, 170);
                        }
                        button{
                            width: 312px;
                            height: 70px;
                            background-color: rgb(73, 144, 238);
                            color:#fff;
                            font-size: 26px;
                            margin-top: 36px;
                        }
                    }
                }
            }
        }
        .comment{
            margin-top: 20px;
            background-color: #fff;
            .title{
                height: 80px;
                line-height: 80px;
                border-bottom: 2px solid rgb(242, 242, 242);
                padding-left: 46px;
                padding-right: 46px;
                font-size: 34px;
                p{
                    color: rgb(170, 170, 170);
                }
            }
            .comment-wrap{
                padding-left: 46px;
                .comment-item{
                    border-bottom: 2px solid rgb(242, 242, 242);
                    .content{
                        padding-top: 28px;
                        padding-bottom: 28px;
                        font-size: 30px;
                        color:rgb(34, 34, 34);
                    }
                    .comment-userinfo{
                        display: flex;
                        align-items: center;
                        padding-bottom: 10px;
                        .avatar{
                            width: 56px;
                            height: 56px;
                            img{
                                width: 56px;
                                height: 56px;
                                border-radius: 50%;
                            }
                        }
                        .username{
                            margin-left: 30px;
                            font-size: 24px;
                            color: rgb(170, 170, 170);
                        }
                    }
                }
                .comment-item:last-of-type{
                    border-bottom: none;
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
                padding-left: 46px;
                flex: 1;
                background-color: #fff;
                display: flex;
                align-items: center;
                .cart,.liuyan{
                    display: block;
                    width: 50px;
                    height: 50px;
                    background-size: 100%;
                    background-position: center;
                    background-repeat: no-repeat;
                }
                .cart{
                    background-image: url('../../img/icon/cart@3x.png');
                }
                .liuyan{
                    background-image: url('../../img/icon/message@3x.png');
                    margin-left: 50px;
                }
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

        .return,.shop,.share{
            position: absolute;
            display: block;
            width: 50px;
            height: 50px;
            top:46px;
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
        }
        .return{
            left: 46px;
            background-image: url('../../img/icon/arrow-left@3x.png');
        }
        .share{
            right: 46px;
            background-image: url('../../img/icon/share@3x.png');
        }
        .shop{
            right: 142px;
            background-image: url('../../img/icon/shop@3x.png');
        }
    }
</style>
