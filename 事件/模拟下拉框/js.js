//鼠标键盘控制
var dv1 = document.getElementById("dv1");
var uls = document.getElementsByTagName("ul")[0];
var cite = document.getElementsByTagName("cite")[0];
var  index = -1;
dv1.onclick=function(){
    uls.style.display="block";
}

var lis = document.getElementsByTagName("li");
for (var i=0;i<lis.length;i++){
    lis[i].onclick=function (e) {
        var e =window.event||e;
        if(e.stopPropagation){
            e.stopPropagation();
        }
        else {
            e.cancelBubble=ture;
        }
        cite.innerHTML=this.innerHTML;
        uls.style.display="none";
    }
    lis[i].onmouseover = function () {
        window.bg =  this.style.background
        this.style.background="green";
    }
    lis[i].onmouseout = function () {
        this.style.background=window.bg;
    }

}

document.onkeydown=function (e) {
    var e =window.event||e;
    switch(e.keyCode){
        case 40:
           for(var i=0;i<lis.length;i++){
               lis[i].style.background="#fff";
           }
            index++;
            if (index>lis.length-1){
                index=0;
            }
            lis[index].style.background="green";
            break;
        case 38://down
            for(var i=0;i<lis.length;i++){
                lis[i].style.background="#fff";
            }
            index--;
            if (index<0){
                index=lis.length-1;
            }
            lis[index].style.background="green";
            break;
        case 13://enter
            cite.innerHTML=lis[index].innerHTML;
            uls.style.display="none";
            for(var i=0;i<lis.length;i++){
                lis[i].style.background="#ffffff";
            }
            break;


    }


}





