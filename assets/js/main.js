"use strict";document.addEventListener("DOMContentLoaded",function(){window.getCookie=function(e){var t=document.cookie.match(new RegExp(e+"=([^;]+)"));if(t)return t[1]},window.setCookie=function(e,t,o){var n=new Date;n.setTime(n.getTime()+24*o*60*60*1e3);var c=n.toUTCString();document.cookie="".concat(e,"=").concat(t,";expires=").concat(c,";path=/")};var t=document.querySelector("#cookie-banner"),e=t.querySelector(".button");getCookie("cookies_accepted")||(t.style.display="block"),e.addEventListener("click",function(e){setCookie("cookies_accepted","true",365),t.style.display="none"})});