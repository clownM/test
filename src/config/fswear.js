
import {loadConfigData,loadParamsData,fetchGlassTypeByConfig,fetchAllConfig,listFrameProfiles,queryFrameProfiles} from '../service/getData'
import $ from 'jquery'
import ajax from './ajax';
import Vue from 'vue';
import vueResource from 'vue-resource';
import {baseUrl,standardOrderUUID} from '../config/env'

//RFC2822格式 日期格式化
export const joinzero = (num) => {
    if(num < 10){
        return "0"+num;
    }else{
        return ""+num;
    }
}
export const formatDate = (date,format) => {
    if(!(date == "")){
        // let _ordertime = date.replace(/-\w*/g, '');
        let _ordertime = new Date(date);
        let _date = new Date(_ordertime);
        let _year = joinzero(_date.getFullYear()) ;
        let _month =joinzero( _date.getMonth() + 1);
        let _day = joinzero(_date.getDate());
        let _hour =joinzero( _date.getHours());
        let _minute =joinzero(_date.getMinutes());
        let _second = joinzero(_date.getSeconds());
        let date_res;
        switch(format){
            case 'long_':
                date_res = _year + "-" + _month + "-" + _day + " " + _hour + ":" + _minute + ":" + _second;
                break;
            case 'long':
                date_res = _year + "年" + _month + "月" + _day + " " + _hour + ":" + _minute + ":" + _second;
                break;
        }
        return date_res;
    }else{
        return "暂无信息";
    }
}

// 获取订单状态
export const getStatus = (parm) => {
    let _status;
    switch (parm) {
        case "toconfirm":
            _status = "扫描未检查";
            break;
        case "toscan":
            _status = "等待扫描";
            break;
        case "cancelled":
            _status = "已取消";
            break;
        case "topay":
            _status = "待支付";
            break;
        case "printing":
            _status = "生产中";
            break;
        case "delivering":
            _status = "已发货";
            break;  
        case "done":
            _status = "交易完成";
            break;  
        default:
            _status = "未知";
    }
    return _status;
}

// 获取快递状态
export const get_delivery_status = status => {
    let _status;
    switch(status){
        case '0':
            _status = '运输中';
            break;
        case '1':
            _status = '揽件中';
            break;
        case '2':
            _status = '疑难';
            break;
        case '3':
            _status = '已签收';
            break;
        case '4':
            _status = '退签';
            break;
        case '5':
            _status = '派件中';
            break;
        default:
            _status = '没有快递信息';
    }
    return _status;
}

export const get_glass_data = async orderobj => {
    /**
    *检测对象是否是空对象(不包含任何可读属性)。
    *方法只既检测对象本身的属性，不检测从原型继承的属性。
    */
    let isOwnEmpty = (obj,key) => {
        let tmp_key = obj.hasOwnProperty(key) ? obj[key] : '';
        return tmp_key;
    }

    /* config 的文本转换成JSON格式 */
    let configToJson = config => {
        if (!(typeof config === "string")) {
            console.log("Config2Json needs input in string type.");
            return;
        }
        config = config.split(/\r?\n/);
        let key;
        let value;
        let config_json = {};
        for (let pair in config) {
            pair = config[pair].trim();
            if ("" == pair)
                continue;
            let pair_ = pair.split(" ");
            key = pair_[0].trim();
            if (pair_.length > 1)
                value = pair_[1].trim();
            else
                value = "";
            if ("" == key)
                continue;
            config_json[key] = value;
        }
        return config_json;
    }

    let glass_collecteddata_data = {};
    let glass_params_data = {};
    let tmp_collecteddata = orderobj.collecteddata;
    if(tmp_collecteddata != ''){
        for(let i in tmp_collecteddata){
            glass_collecteddata_data[i] = tmp_collecteddata[i];
        }
    }
    let glass_config_data = {};
    if(!glass_config_data.pupilDistance){
        
    }else{
        glass_config_data.pupilDistance = glass_collecteddata_data.pupilDistance;
    }

    /****** 把config 按照config_literal -> config -> preconfig 整合成一个新的config******/
    let tmp_preconfig_data = orderobj.preconfig;
    if(tmp_preconfig_data != ''){
        for(let i in tmp_preconfig_data){
            glass_config_data[i] = tmp_preconfig_data[i];
        }
    }
    let configuuid = orderobj.config[0];
    if(typeof configuuid != 'undefined'){
        let res = await loadConfigData(configuuid);
        if(res && res.result != 'false'){
            let config_json = configToJson(res);
            for(let i in config_json){
                glass_config_data[i] = config_json[i];
            }
        }
    }
    
    let paramsuuid = orderobj.params;
    if(typeof paramsuuid != 'undefined'){
        let res2 = await loadParamsData(paramsuuid);
        if (JSON.parse(res2) && JSON.parse(res2).result != 'false' && res2 != '') {
            let tmp_params = JSON.parse(res2);
            for (let i in tmp_params) {
                glass_params_data[i] = tmp_params[i];
            }
        }
    }
    // let tmp_collecteddata = isOwnEmpty(glass_collecteddata_data,'sdf');
    let resobj = {};
    /**
     * 验光参数 
     **/
    resobj.left_degrees = isOwnEmpty(glass_collecteddata_data, 'left_degrees');
    resobj.left_cyl = isOwnEmpty(glass_collecteddata_data, 'left_cyl');
    resobj.left_axis = isOwnEmpty(glass_collecteddata_data, 'left_axis');

    resobj.right_degrees = isOwnEmpty(glass_collecteddata_data, 'right_degrees');
    resobj.right_cyl = isOwnEmpty(glass_collecteddata_data, 'right_cyl');
    resobj.right_axis = isOwnEmpty(glass_collecteddata_data, 'right_axis');
    resobj.pupilDistance = isOwnEmpty(glass_config_data, 'PupilDistance');

    /**
     * 镜框参数
     **/
    resobj.widthScale = isOwnEmpty(glass_config_data, 'WidthScale');
    resobj.heightScale = isOwnEmpty(glass_config_data, 'HeightScale');
    resobj.bridgeSpanRatio = isOwnEmpty(glass_config_data, 'BridgeSpanRatio');

    /**
     * 眼镜的框镜型
     **/
    if (!glass_config_data.LensProfileFile) {
        let tmp_lensprofilefile_img = '{"top":"100","left":"100"}';
        resobj.lensprofilefile = '';
        resobj.lensprofilefile_img = JSON.parse('{"top":"100","left":"100"}');
    } else {
        let tmp_lensprofilefile = glass_config_data.LensProfileFile.slice(15, -8);
        // resobj.lensprofilefile = setframe(tmp_lensprofilefile)
        // resobj.lensprofilefile_img = setframeimg(tmp_lensprofilefile);
    }

    /**
     *眼镜镜框颜色
     **/
    if (!glass_config_data.FrameColor) {
        resobj.frameColor = '#282828';
    } else {
        // resobj.frameColor = glass_color(isOwnEmpty(glass_config_data.FrameColor));
    }

    /**
     *眼镜镜腿镜型
     **/
    if (typeof (glass_config_data.LegProfile) == "undefined") {
        resobj.legProfile = 'c3';
    } else {
        resobj.legProfile = glass_config_data.LegProfile;
    }

    /**
     *眼镜镜腿颜色
     **/
    if (!glass_config_data.LegColor) {
        resobj.legColor = '#282828';
    } else {
        // resobj.legColor = glass_color(glass_config_data.LegColor);
    }

    /**
     *刻字
     **/
    /****** 镜框 ******/
    resobj.slotMessage = isOwnEmpty(glass_config_data, 'SlotMessage');
    /****** 镜腿 ******/
    resobj.legMessage = isOwnEmpty(glass_config_data, 'LegMessage');

    return resobj;
}
/* config 的文本转换成JSON格式 */
export const Config2Json = (config) => {
    if (! (typeof config === "string")) {
        console.log("Config2Json needs input in string type.");
        return;
    }
    config = config.split(/\r?\n/);
    var key;
    var value;
    var config_json = {};
    for (var pair in config) {
        pair = config[pair].trim();
        if ("" == pair)
            continue;
        
        var pair_ = pair.split(" ");
        key = pair_[0].trim();
        if(pair_.length > 1)
            value = pair_[1].trim();
        else
            value = "";
        
        if ("" == key)
            continue;
        
        config_json[key] = value;
    }
    
    return config_json;
}


export const glassTypeGenobjMap = async() => {
    let res = await fetchAllConfig();
    let glass_type_genobj_map = {};
    for (let idx in res.config) {
        let config_uuid = res.config[idx];
        let url = baseUrl+"/data?action=download&uuid="+config_uuid+"&type=config";
        await Vue.http.get(url).then(response => {
            let config_json = Config2Json(response.data);
            let glass_type = config_json.LensProfileIdentifier;
            glass_type_genobj_map[glass_type] = res.genobj[idx];
        },response => {
            console.warn(response)
        })
    }
    return glass_type_genobj_map;
}

export const getFramesObj = async() => {
    let frames_obj = [];
    let obj = {};
    let list_frame_profiles = await listFrameProfiles();
    let frame_profiles_uuid = list_frame_profiles.list[0];
    let res = await queryFrameProfiles(frame_profiles_uuid);
    let frame_profiles = res.description.frame_profiles;
    let glass_type_genobj_map = await glassTypeGenobjMap();
    for(let key in frame_profiles.data){
        let val = frame_profiles.data[key];
        let frame_uuid = glass_type_genobj_map[val];
        obj[frame_uuid] = {
            "alias":frame_profiles.alias[key],
            "material":frame_profiles.material[key],
            "frame_type":frame_profiles.data[key]
        }
        frames_obj.push({
            "frame_uuid":frame_uuid,
            "alias":frame_profiles.alias[key],
            "material":frame_profiles.material[key],
            "frame_type":frame_profiles.data[key]
        });
    }
    return obj;
}

export const frameProfilesCrop = async () => {
    let result = null;
    let arr = [];
    let res = await listFrameProfiles();
    let frame_profiles_uuid = res.list[0];
    let res2 = await queryFrameProfiles(frame_profiles_uuid);
    // let frame_profiles_img_uuid = res2.content;
    let frame_profiles = res2.description.frame_profiles;
    let row_count = frame_profiles.dimensions[1],
        column_count = frame_profiles.dimensions[0],
        width = frame_profiles.size[0],
        height = frame_profiles.size[1],
        single_width = width / column_count,
        single_height = height / row_count;
    for(let i=0; i < row_count; i++){
        for(let j=0; j < column_count; j++){
            arr.push({
                "position-x":i*single_height,
                "position-y":j*single_width
            })
        }
    }
    // console.log(frame_profiles_img_uuid);
    
    // let url222 = baseUrl+"/common?action=download&uuid="+frame_profiles_img_uuid+"&type=frame_profiles";
    // await Vue.http.get(url222).then(response => {
    //     result = response.data;
    // },response => {
    //     console.warn(response)
    // })
    // return result;
    return arr;
}


