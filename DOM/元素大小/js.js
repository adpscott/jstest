var box=document.getElementById("box");

//50ms宽度增加10
setInterval(
    function(){
        box.style.width=parseInt(getattr(box,"width"))-2+"px";



    },100)

function  getattr(dom,value) {

    if (dom.currentStyle) {
        return dom.currentStyle[value];
    }
    else {
        return getComputedStyle(dom, null)[value];
    }
}



