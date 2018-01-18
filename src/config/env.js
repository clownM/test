/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

// let baseUrl = '/api'; 
let baseUrl = '';
let routerMode = 'history';
let imgBaseUrl = 'http://images.cangdu.org/';
let standardOrderUUID = "d64c27b20a73b1bc480322c95dab7e20";


if (process.env.NODE_ENV == 'development') {

}else if(process.env.NODE_ENV == 'production'){
	// baseUrl = 'http://cangdu.org:8001';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
	standardOrderUUID
}