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
        height: 1.173333rem;
        position: relative;
        display: flex;
        padding-left: .613333rem;
        padding-right: .613333rem;
    }

    .search-box {
        flex:1;
        height: .88rem;
        margin-top: .146667rem;
        border-radius: .066667rem;
        padding-left: .853333rem;
        background-color: rgb(238, 238, 238);
        outline: none;
        border: none;
    }

    .search-box::-webkit-input-placeholder {
        color: rgb(170, 170, 170);
    }

    .search-icon {
        position: absolute;
        width: .4rem;
        height: .426667rem;
        top: .373333rem;
        left: .84rem;
        background-color: #fff;
    }

    .banner {
        height: 4.933333rem;
        img{
            width: 100%;
            height:100%;
        }
    }

    .frameandsunglasses {
        height: 1.8rem;
        display: flex;
        justify-content: space-between;
        padding-top: 0.666667rem;
        padding-left: .613333rem;
        padding-right: .613333rem;
        .frame,
        .sunglasses {
            width: 3.893333rem;
            height: 1.066667rem;
            // border: 1px solid rgb(238, 238, 238);
            border-radius: 5px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            box-shadow: 5px 5px 15px 2px rgb(238, 238, 238);
            -moz-box-shadow:10px 10px 15px 5px #888;
            img{
                width: 1.493333rem;
                height: .533333rem;
            }
            span{
                font-size: 24px;
                color:rgb(112, 112, 112);
            }
        }
    }

    .hotItems,.recommendItems{
        margin-top: 0.266667rem;
        .title{
            height: 1.04rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: .613333rem;
            padding-right: .613333rem;
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
                height: .40rem;
                background-color: rgb(73, 144, 238);
            }
        }
    }
    .hotItems {
        .hotItems-carousel{
            height: 5.12rem;
            .van-swipe{
                height: 100%;
                .items{
                    padding-left: .613333rem;
                    padding-right: .613333rem;
                    display: flex;
                    justify-content: space-between;
                    .item{
                        width: 2.666667rem;
                        .imgwrap{
                            width: 2.666667rem;
                            height: 2.666667rem;
                            display: flex;
                            align-items: center;
                            img{
                                width: 2.666667rem;
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
                        width: 0.186667rem;
                        height: 0.186667rem;
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
            padding-left: .613333rem;
            padding-right: .613333rem;
            padding-top: 0.333333rem;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .recommend-item{
                width: 4.186667rem;
                padding-bottom: 0.453333rem;
                background-color: #fff;
                .img-wrap{
                    width: 4.186667rem;
                    height: 4.186667rem;
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
