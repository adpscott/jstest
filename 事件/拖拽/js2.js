//有问题的版本，由于鼠标获取全集中在move，使得onmouseup只能在box区域生效


var box = document.getElementById("box");
box.onmousedown=function(e){
    var e = window.event || e;

    document.onmousemove =function(e){

        var e = window.event || e;

        var x = e.clientX - box.offsetLeft/2;
        var y = e.clientY - box.offsetTop/2;


        box.style.left= x +"px";
        box.style.top= y +"px";

    }
}

box.onmouseup = function () {

    document.onmousemove =null;


}

