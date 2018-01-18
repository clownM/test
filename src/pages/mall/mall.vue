<template>
    <div id="mall">
        <section class="search">
            <input class="search-box" type="text" placeholder="还挑不到自己想要的款式？点击搜索试试！">
            <span class="search-icon"></span>
        </section>
        <section class='banner'>
            <img src="../../img/mall/zhineng.jpg" alt="">
        </section>
        <section class="frameandsunglasses">
            <div class="frame">
                <img src="../../img/mall/镜框@3x.png" alt="">
                <span>镜框</span>
            </div>
            <div class="sunglasses">
                <img src="../../img/mall/墨镜@3x.png" alt="">
                <span>墨镜</span>
            </div>
        </section>
        <!-- 热销单品 -->
        <section class="hotItems">
            <div class="title">
                <div class="left">
                    <span class="shuxian"></span>
                    <span>热门单品</span>
                </div>
                <div class="right">
                    <span :style='{color:"rgb(170,170,170)"}'>更多</span>
                </div>
            </div>
            <div class="hotItems-carousel">
                <van-swipe :autoplay="5000">
                    <van-swipe-item>
                        <div class="items">
                            <div class="item">
                                <div class="imgwrap">
                                    <img src="../../img/mall/墨镜@3x.png" alt="">
                                </div>
                                <p class='alia'>MM2356</p>
                                <P class='price'>￥380.00</P>
                            </div>
                            <div class="item">
                                <div class="imgwrap">
                                    <img src="../../img/mall/镜框@3x.png" alt="">
                                </div>
                                <p class='alia'>MM2356</p>
                                <P class='price'>￥380.00</P>
                            </div>
                            <div class="item">
                                <div class="imgwrap">
                                    <img src="../../img/mall/墨镜@3x.png" alt="">
                                </div>
                                <p class='alia'>MM2356</p>
                                <P class='price'>￥380.00</P>
                            </div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="items">
                            <div class="item">
                                <div class="imgwrap">
                                    <img src="../../img/mall/镜框@3x.png" alt="">
                                </div>
                                <p class='alia'>MM2356</p>
                                <P class='price'>￥380.00</P>
                            </div>
                            <div class="item">
                                <div class="imgwrap">
                                    <img src="../../img/mall/墨镜@3x.png" alt="">
                                </div>
                                <p class='alia'>MM2356</p>
                                <P class='price'>￥380.00</P>
                            </div>
                            <div class="item">
                                <div class="imgwrap">
                                    <img src="../../img/mall/镜框@3x.png" alt="">
                                </div>
                                <p class='alia'>MM2356</p>
                                <P class='price'>￥380.00</P>
                            </div>
                        </div>
                    </van-swipe-item>
                </van-swipe>
            </div>
        </section>
        <!-- 推荐单品 -->
        <section class="recommendItems">
            <div class="title">
                <span class="shuxian"></span>
                <span>推荐单品</span>
            </div>
            <div class="items-wrap">
                <div class="recommend-item" v-for="alia in alias">
                    <div class="img-wrap">
                        <img src="../../img/mall/墨镜@3x.png" alt="">
                    </div>
                    <p class='alia'>{{ alia }}</p>
                    <p class="price">￥380.00</p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import {listFrameProfiles,queryFrameProfiles} from '../../service/getData'
import {glassTypeGenobjMap,getFramesObj} from '../../config/fswear'
import {baseUrl,standardOrderUUID} from '../../config/env'
    export default{
        mame:'mall',
        data(){
            return{
                alias:null,
            }
        },
        mounted(){
            this.initData();
        },
        methods:{
            async initData(){
                let res = await glassTypeGenobjMap();
                console.log(res);

               let res2 = await listFrameProfiles();
               let frame_profiles_uuid = res2.list[0];
               let res3 = await queryFrameProfiles(frame_profiles_uuid);
               console.log("frame_profiles:",res3);
               this.alias = res3.description.frame_profiles.alias;
               for(let key in res3.description.frame_profiles.data){
                   let val = res3.description.frame_profiles.data[key];
                   let id = res[val];
               }
               let frames_obj = await getFramesObj();
               console.log(frames_obj);
            },
        }
    }
</script>
<style lang='scss'>
    * {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'PingFang-SC-Regular';
        // font-family: "楷体";
        width: 100%;
        background-color: rgb(242, 242, 242);
    }
    #mall{
        width: 100%;
    }
    #mall>section{
        background-color: #fff;
    }
    .search {
        height: 88px;
        position: relative;
        display: flex;
        padding-left: 46px;
        padding-right: 46px;
    }

    .search-box {
        flex:1;
        height: 66px;
        margin-top: 11px;
        border-radius: 5px;
        padding-left: 64px;
        background-color: rgb(238, 238, 238);
        outline: none;
        border: none;
    }

    .search-box::-webkit-input-placeholder {
        color: rgb(170, 170, 170);
    }

    .search-icon {
        position: absolute;
        width: 30px;
        height: 32px;
        top: 28px;
        left: 63px;
        background-color: #fff;
    }

    .banner {
        height: 370px;
        img{
            width: 100%;
            height:100%;
        }
    }

    .frameandsunglasses {
        height: 135px;
        display: flex;
        justify-content: space-between;
        padding-top: 50px;
        padding-left: 46px;
        padding-right: 46px;
        .frame,
        .sunglasses {
            width: 292px;
            height: 80px;
            // border: 0.0133rem solid rgb(238, 238, 238);
            border-radius: 5px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            box-shadow: 50px 5px 15px 2px rgb(238, 238, 238);
            -moz-box-shadow:10px 10px 15px 5px #888;
            img{
                width: 112px;
                height: 40px;
            }
            span{
                font-size: 24px;
                color:rgb(112, 112, 112);
            }
        }
    }

    .hotItems,.recommendItems{
        margin-top: 20px;
        .title{
            height: 78px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 46px;
            padding-right: 46px;
            border-bottom: 1px solid rgb(238, 238, 238);
            .left{
                display: flex;
                align-items: center;
            }
            span{
                font-size: 34px;
                margin-left: 20px;
            }
            .shuxian{
                display: inline-block;
                width: 4px;
                height: 30px;
                background-color: rgb(73, 144, 238);
            }
        }
    }
    .hotItems {
        .hotItems-carousel{
            height: 384px;
            .van-swipe{
                height: 100%;
                .items{
                    padding-left: 46px;
                    padding-right: 46px;
                    display: flex;
                    justify-content: space-between;
                    .item{
                        width: 200px;
                        .imgwrap{
                            width: 200px;
                            height: 200px;
                            display: flex;
                            align-items: center;
                            img{
                                width: 200px;
                            }   
                        }
                        p{
                            width: 100%;
                            text-align: center;
                        }
                    }
                }
                .van-swipe__indicators{
                    i{
                        width: 14px;
                        height: 14px;
                        background-color: rgb(238, 238, 238);
                    }
                    i.van-swipe__indicator--active{
                        background-color: rgb(98, 98, 98);
                    }
                }
            }
        }
    }   
    .recommendItems{
        .title{
            justify-content: flex-start;
        }
        .items-wrap{
            padding-left: 46px;
            padding-right: 46px;
            padding-top: 25px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .recommend-item{
                width: 314px;
                padding-bottom: 34px;
                background-color: #fff;
                .img-wrap{
                    width: 314px;
                    height: 314px;
                    border-radius: 5px;
                    background-color: rgb(236, 236, 236);
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    img{
                        width: 80%;
                    }
                }
                p{
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }
    .price{
        color:rgb(248, 92, 92);
        font-size:28px;
    }
    .alia{
        color:rgb(34, 34, 34);
        font-size: 24px;
    }
</style>
