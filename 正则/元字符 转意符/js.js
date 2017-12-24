//正则；

// var reg = /[abc]/;//只要有一个一样的就行；
// var str= "ac";
// alert(reg.test(str));

// var reg = /[^abc]/;//不能有一样的字符
// var str ="78";
// alert(reg.test(str));

// var reg = /[0-5]/;//挨个匹配数字，每一位数字单独匹配
// var num = 9 ;
// alert(reg.test(num));

// var reg = /[A-z]/;
// var str = "Bcas";
// alert(reg.test(str));

//var reg=/[0-5][6-9][a-z][A-Z]/



// \d 匹配数字；
// \D 匹配非数字；
// \w 匹配数字字母下划线；
// \W 相反同上
// \s 空格
// \S 非空额；
// \b 匹配边界；// \bbb\b  // 匹配bb;
// 点.非换行符；/n


//元字符==>  \ 让匹配正则失去作用，失去特殊含义；

var reg = /\./;
var str=".";
alert(reg.test(str));

