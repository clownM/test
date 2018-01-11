/**
* 存储localStorage
*/
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
 }
 
 /**
 * 获取localStorage
 */
 export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
 }
 
 /**
 * 删除localStorage
 */
 export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
 }
 
 /* 存储sessionStore */
 export const setSessionStore = (name,content) => {
     if(!name) return;
     if (typeof content !== 'string') {
         content = JSON.stringify(content);
     }
     window.sessionStorage.setItem(name, content);
 }
 /* 获取sessionStore */
 export const getSessionStore = name => {
     if (!name) return;
     return window.sessionStorage.getItem(name);
 }
 /**
  * 存储cookie
  */ 
 export const setCookie = (name,content,time) => {
     if (!name) return;
     if (typeof content !== 'string') {
         content = JSON.stringify(content);
     }
     let d = new Date();
     d.setTime(d.getTime() + (time * 24 * 60 * 60 * 1000));
     let expires = "expires=" + d.toGMTString();
     document.cookie = name + "=" + escape(content) + "; " + expires;
 }
 /**
  * 获取cookie
  */
 export const getCookie = name => {
     if (!name) return;
     name += "=";
     let cookies = document.cookie.split(';');
     for (var i = 0; i < cookies.length; i++)  { 
         let cookie = cookies[i].trim(); 
         if (cookie.indexOf(name) == 0) 
             return unescape(cookie.substring(name.length, cookie.length));
     }
     return "";
 }
 /** 
 * 删除cookie
 */
 export const delCookie = name => {
     if (!name) return;
     var exp = new Date();
     exp.setTime(exp.getTime() - 1);
     var cval = getCookie(name);
     if (cval != null){
         document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()+";path=/";
     }
 }
 
 /**
  * 判断移动端与PC
  */
 export const isPC = () =>{
     let userAgentInfo = navigator.userAgent;
     let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
     let flag = true;
     for (let v = 0; v < Agents.length; v++) {
         if (userAgentInfo.indexOf(Agents[v]) > 0) {
             flag = false;
             break;
         }
     }
     return flag;
 }