//封装一个函数 类似于trim

/*function t(str){
var reg=/^\s*|\s*$/g ;
str1 =str.replace(reg,"");
return str1;

}*/
//document.write( t("                   0a      s          "))


function getClass(cName){
    var arr = [];
    var doms = document.getElementsByTagName("*");
    var reg =new RegExp( "\\b"+cName+"\\b") ;
  for(var i =0; i<doms.length;i++){
   if (reg.test(doms[i].className)){

   arr.push(doms[i]);

   }

   }
   return arr;
}

var liss=getClass("lis");
for(var i = 0; i<liss.length; i++){
liss[i].style.background="red";
}
//alert(getClass("lis").length);




