//1.选择符 | 或

//2.修饰符
// i不区分大小写/[a-z]/i, var reg=regexp("[a-z]" ,"i");
//
// g 全文模式；匹配所有符合条件的字符；
//
// m换行匹配；有换行\n

var reg= /\d/gm;
var str = "1.baidu\n2.baidu\n3.baidu";
var strreplace = str.replace(reg,"***");
document.write(strreplace);
