<template>
    <div>
        <button @click="callJS">click me</button>
    </div>
</template>
<script>
import {frameProfilesCrop} from './config/fswear'
export default{
    data(){
        return{
            imgsrc:null
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            let res = frameProfilesCrop();
            console.log(res);

        },
        callJS(){
            let obj = {"a":"123456","b":"789123"};
            // window.postMessage(obj);
            window.webkit.messageHandlers.callJS.postMessage(obj);
        }
    }
}    
</script>
<style>
    button{
        width: 200px;
        height: 50px;
    }
</style>
