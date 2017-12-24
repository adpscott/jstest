//分组    /(abc){3}/

// var reg1 = /^(abc\s){3}$/;
// var str = "abc abc abc ";
// alert(reg1.test(str));

//字符类  $1----$99
//必须使用一下正则（运行一下）；
//返回的是匹配内容，必须使用内容

var reg=/(baidu) taobao jd/;
var str = "baidu taobao jd";
reg.test(str);
alert(RegExp.$1);

var reg=/(baidu) taobao jd/;
var str = "我是baidu";




