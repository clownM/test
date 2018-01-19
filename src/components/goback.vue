<template>
    <section class="top-fixed">
        <div class="go-back">
            <img src="../img/icon/arrow-left@3x.png" alt="" class='icon-back'>
            <b>{{ title }}</b>
        </div>
    </section>
</template>

<script>
    export default{
        data(){
           return{
               isPC:null
           }
        },
        props:['title'],
        mounted(){

        },
        methods:{

        }
    }
</script>

<style lang='scss'>
@import '../style/common';
.top-fixed {
  width:100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom: 1px solid rgb(240, 240, 240);
  z-index: 102;
}

div.go-back {
    text-align: center;
    position: relative;
    height: 88px;
    line-height: 88px;
    font-size: 34px;
    color:rgb(34,34,34);
    .icon-back{
        position: absolute;
        height: 34px;
        left: 46px;
        top: 27px;
    }
}
</style>
