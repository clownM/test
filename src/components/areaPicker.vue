<template>
    <div class="area-picker">
        <div class="picker-wrap">
            <div class="title">
                <button>请选择</button>
                <button>确定</button>
            </div>
            <div class="select-wrap">
                <div class="select-item" v-for="item in province_list">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import areaData from '../config/area.json'
export default{
    data(){
        return{
            province_list:[]
        }
    },
    mounted(){
        // this.areaJson = data;
        this.getAreaData();
    },
    methods:{
        getAreaData(){
            let arr=[];
            for (let key in areaData.province_list) {
                if (areaData.province_list.hasOwnProperty(key)) {
                    let element = areaData.province_list[key];
                    arr.push(element);
                }
            }
            console.log(arr);
            
            this.province_list = arr;
        }
    }
}
</script>
<style lang='scss'>
.area-picker{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(227, 227, 227, 0.5);
    z-index: 999;
    .picker-wrap{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        .title{
            height: 80px;
            display: flex;
            justify-content: space-between;
            padding-left: 46px;
            padding-right: 46px;
            border-bottom: 2px solid rgb(220, 220, 220);
            font-size: 28px;
            color: rgb(34, 34, 34);
            button{
                background-color: #fff;
            }
        }
        .select-wrap{
            width: 100%;
            height: 704px;
            padding-left: 46px;
            padding-right: 46px;
            overflow: scroll;
            .select-item{
                width: 100%;
                height: 88px;
                line-height: 88px;
                font-size: 28px;
                color: rgb(34, 34, 34);
            }
        }
    }
}
</style>
