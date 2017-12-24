
//function fn(c){
//     var str = "https://www.baidu.com/s?wd=xzcxzc&rsv_spt=1&rsv_iqid=0xe5e128a70002330f&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8"
//     var reg = new RegExp(c+"=([^&]+)");
//      reg.test(str);
//     return RegExp.$1;
// }
//
// alert( fn("wd") );



var arr = [1,2,3,6,9,7,-1];

alert(Math.min.apply(null,arr));