var dv1 = document.getElementById("dv1");
var dv2 = document.getElementById("dv2");

dv2.onmousedown = function (e) {
    var e = window.event|| e ;

    document.onmousemove = function (e) {

        var e = window.event|| e ;

        var movewidth = e.clientX + dv2.offsetWidth /2;
        var moveheigth = e.clientX + dv2.offsetHeight /2;

        dv1.style.width = movewidth +"px"
        dv1.style.height =  moveheigth +"px"

    }
}

document.onmouseup = function(){

    document.onmousemove = null;

}