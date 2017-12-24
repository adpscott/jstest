/*var box=document.getElementById("box");

box.onclick=function(e){
    var e = window.event||e;
    alert ( e.src.element||e.target);
}
*/

/*
var lis=document.getElementsByTagName("li");
var uls=document.getElementById("uls");
for(var i = 0; i<lis.length; i++){
    lis[i].onclick=function () {
        this.style.background="red";
    }
}


var btn=document.getElementById("btn");

btn.onclick=function () {
    var li=document.createElement("li");
    uls.appendChild(li);
}

*/


var uls=document.getElementById("uls");
var btn=document.getElementById("btn");

btn.onclick=function () {

    var li=document.createElement("li");
    uls.appendChild(li);
}

uls.onclick=function(e) {

var e = window.event || e;

   if (e.target.nodeName=="LI") {

       e.target.style.background = "red"
   }

}