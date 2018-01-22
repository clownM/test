<template>
    <div class="addAddress-page">
        <goback title='新建地址'></goback>
        <section class='inputArea'>
            <input type="text" placeholder="省份、城市、区县" @click="showAreaSelect" v-model='area'>
            <input type="text" placeholder="详细地址，如街道、楼牌号等" v-model="fullAddress">
            <input type="text" placeholder="姓名" v-model="name">
            <input type="text" placeholder="手机号码" v-model="phone">
        </section>
        <section class='setDefault' @click="setDefault">
            <span class='icon-select' :class="{select_true:areaDefault}"></span> <p>设为默认地址 </p> 
        </section>
        <section class="btn-save">
            <button @click="save">保存</button>
        </section>
        <section class="area-picker" v-show="pickerVisible">
            <van-area :area-list='areaList' 
                @confirm='areaPickerConfirm'
                @cancel='areaPickerCancel'>
            </van-area>
        </section>
    </div>
</template>
<script>
import goback from '../../components/goback'
import areaPicker from '../../components/areaPicker'
import areaList from '../../config/area.json'
export default{
    data(){
        return{
            area:null,
            fullAddress:null,
            name:null,
            phone:null,
            areaList:null,
            pickerVisible:false,
            areaPickerValue:null,
            areaDefault:false
        }
    },
    components:{
        goback,areaPicker
    },
    mounted(){
        this.areaList = areaList;
    },
    methods:{
        showAreaSelect(){
            this.pickerVisible = true
        },
        areaPickerConfirm(value){
            console.log(value);
            this.pickerVisible = false;
            let province = value[0].name,
                city = value[1].name,
                county = value[2].name;
            this.area = province+' '+city+' '+county;
        },
        areaPickerCancel(){
            this.pickerVisible = false;
        },
        setDefault(){
            this.areaDefault = !this.areaDefault;
        },
        save(){
            if(!this.area){
                alert('请选择地区')
            }else if(!this.fullAddress){
                alert('请填写详细地址')
            }else if(!this.name){
                alert('请填写收货人姓名')
            }else if(!this.phone){
                alert('请输入手机号')
            }else{
                if( !(/1[34578]\d{9}$/.test(this.phone)) ){
                    alert('请输入正确的手机号')                
                }else{
                    console.log(this.area,this.fullAddress,this.name,this.phone);
                }
            }
        }
    }
}
</script>
<style lang='scss'>
.addAddress-page{
    padding-top: 88px;
    padding-bottom: 48px;
    width: 100%;
    min-height: 100%;
    background-color: #fff;
    position: relative;
    .inputArea{
        width: 100%;
        input{
            width: 100%;
            height: 100px;
            line-height: 100px;
            font-size: 28px;
            color:rgb(34, 34, 34);
            border-bottom: 1px solid rgb(242, 242, 242);
            padding-left: 46px;
            padding-right: 46px;
        }
    }
    .setDefault{
        position: relative;
        width: 220px;
        margin: 30px auto;
        p{
            font-size: 26px;
            color:rgb(112, 112, 112);
            margin-left: 46px;
        }
        .icon-select{
            position: absolute;
            display: inline-block;
            width: 30px;
            height: 30px;
            top: 5px;
            background-image: url('../../img/icon/select_false.png');
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
        }
        .select_true{
            background-image: url('../../img/icon/select_true.png');
        }
    }
    .btn-save{
        width: 640px;
        margin: 100px auto;
        margin-bottom: 0;
        button{
            width: 100%;
            height: 80px;
            background-color: #fff;
            border: 1px solid rgb(73, 144, 238);
            color: rgb(73, 144, 238);
            font-size: 28px;
        }
    }
    .area-picker{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 999;
        background-color: rgba(112, 112, 112, 0.5);
        .van-picker{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            .van-hairline--top-bottom{
                height: 80px;
                line-height: 80px;
                padding-left: 46px;
                padding-right: 46px;
                font-size: 28px;
            }
        }
    }
}
</style>
