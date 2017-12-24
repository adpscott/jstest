var div1=document.getElementById("div1");
var div2=document.getElementById("div2");


div1.onclick=function () {
    alert(1 );
}
div2.onclick=function (e) {
    var e = window.event||e;

  //  e.stopPropagation(); goo
   // e.cancelBubble=true; ie

    if ( e.stopPropagation){
        e.stopPropagation()
    }else {
        e.cancelBubble=true;
    }

    alert(2 );
}

//阻止冒泡方法：对象下的属性  ie/非ie

//阻止默认事件，e.preventDefault() goo

//e.returnvalue=false;
