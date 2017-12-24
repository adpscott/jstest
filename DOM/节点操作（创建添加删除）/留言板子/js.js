var btn = document.getElementById("btn");
var uls=document.getElementById("uls");
var text = document.getElementById("text");



btn.onclick =function () {
    var lis = document.getElementsByTagName("li");
var oli = document.createElement("li");
uls.insertBefore(oli,lis[0]);
//var t = document.createTextNode(text.value);
//oli.appendChild(t+"<a herf='javascript:;'>delete</a>");
oli.innerHTML=text.value+"<a href='javascript:;'>del</a>"

    //删除事件；
    var a=document.getElementsByTagName("a");//在生成li同事获取a元素


    //循环生成事件
    for(var i=0; i<a.length; i++){
        a[i].onclick= function(){
         uls.removeChild(this.parentNode);
        }
    }
}


