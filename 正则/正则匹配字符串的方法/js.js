//search  //返回位置 没有就-1 不支持全局g
//match //返回数组 ，没有就空；
//replace

//var reg = /a/;
//var str = "a b a c a d";
//alert(str.match(reg));

/*var reg1 = /a/g;
var str1 = "ab ac ad";
//var arr = reg1.exec(str1); //正则exec不支持全局 用while循环
var arr =null;
while(reg.exec(str1)){
    document.write(arr);
}*/


var reg = /a/g;
var str ="ab ac ad";
var arr = str.match(reg);
alert(arr);



