
import {getCookie} from '../config/utils';
// import {Config2Json} from '../config/fswear'
import ajax from '../config/ajax';
import {baseUrl,standardOrderUUID} from '../config/env'

/**
 * 密码登录
 */
export const passwordLogin =(phone,username,password) => ajax({
	url:baseUrl+'/user',
	data:{
		action:'login',
		phone:phone,
		username:username,
		password:password
	},
	dataType:'JSON',
})

/**
 * 注册用户
 */
export const createUser =(phone,username,password) => ajax({
	url:baseUrl+'/user',
	data:{
		action:'create',
		phone:phone,
		username:username,
		password:password
	},
	dataType:'JSON',
})

/**
 * 获取用户信息
 */
export const queryUser =() => ajax({
	url:baseUrl+'/user',
	data:{
		action:'query',
		uuid:getCookie('UserUUID'),
		phone:'',
		username:'',
		gender:'',
		birthday:'',
		address:'',
		orders:''
	},
	dataType:'JSON',
})

/**
 * 修改密码
 */
export const changePassword = (uuid, oldpwd, newpwd) => ajax({
	url:baseUrl+'/user',
	data:{
		action: 'update',
		uuid: uuid,
		oldpassword: oldpwd,
		password:newpwd
	},
	dataType:'JSON'
})

//修改用户名
export const newUsername = (uuid,username) => ajax({
	url:baseUrl+'/user',
	data:{
		action: 'update',
		uuid:uuid,
		username:username
	}
})
//修改生日
export const newBirthday = (uuid,birthday) => ajax({
	url:baseUrl+'/user',
	data:{
		action:'update',
		uuid:uuid,
		birthday:birthday
	}
})
//修改性别
export const newGender = (uuid,gender) => ajax({
	url:baseUrl+'/user',
	data:{
		action:'update',
		uuid:uuid,
		gender:gender
	}
})
export const updateUser = (username,gender,birthday) => ajax({
	url: '/user',
	data:{
		action:'update',
		uuid:uuid,
		username:username,
		gender:gender,
		birthday:birthday
	}
})
// 查询order
export const queryOrder = (orderuuid) => ajax({
	url:baseUrl+'/order',
	data:{
		action: 'query',
		uuid: orderuuid,
		createdate:'',
		head:'',
		config:'',
		genobj:'',
		deals:'',
		station:'',
		appointmentdate:'',
		scandate:'',
		pinfo:'',
		status:'',
		preconfig:'',
		collecteddata:''
	}
})
// 取消order预约
export const cancelOrder = (orderuuid) => ajax({
	url:baseUrl+'/order',
	data:{
		action:'cancel',
		uuid:orderuuid
	}
})
//查询deal
export const queryDeal = (dealuuid) => ajax({
	url:baseUrl+'/deal',
	data:{
		action:'query',
		uuid:dealuuid,
		createdate:'',
		config:'',
		genprint:'',
		owneruuid:'',
		price: "",
		status: "",
		owneruuid: "",
		config_literal: "",
		printdate: "",
		delivery: "",
		deliverydate: "",
		acceptdate: "",
		params: '',
		paymentstatus: '',
		discount: ''
	}
})
//快递查询
export const queryDelivery = (company,postid) => ajax({
	url:baseUrl+'/express',
	data:{
		action:'query',
		company:company,
		postid:postid
	}
})
//configData
export const loadConfigData = (uuid) => ajax({
	url:baseUrl+'/data',
	data:{
		action:'download',
		type: 'config',
		Chunk: '0',
		uuid:uuid
	},
	dataType:'text'
})
//paramsData
export const loadParamsData = (uuid) => ajax({
	url:baseUrl+'/data',
	data:{
		action: 'download',
		type: 'params',
		uuid:uuid
	}
})

//frame_profiles
export const listFrameProfiles = () => ajax({
	url:baseUrl+'/common',
	data:{
		action:'list',
		type:'frame_profiles',
	}
})
export const queryFrameProfiles = (uuid) => ajax({
	url:baseUrl+'/common',
	data:{
		action:'query',
		type:'frame_profiles',
		uuid:uuid,
		content:'',
		description:'',
		dataform:'',
		count:'',
		createdate:''
	}
})


export const fetchGlassTypeByConfig = (config_uuid) => ajax({
	url:baseUrl+"/data",
	data:{
		action:"download",
		type:"config",
		uuid:config_uuid
	}
})
export const fetchAllConfig = () => ajax({
	url:baseUrl+"/order",
	data:{
		action:'query',
		uuid:standardOrderUUID,
		genobj:'',
		config:''
	}
})

