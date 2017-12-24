var box = document.getElementById("box");

//console.log(box.style.width);只能获取html中的样式

//获取css中的style;

function getattr(dom,value) {

    if (dom.currentStyle) {


        return dom.currentStyle["value"];
    }
    else {

        return getComputedStyle(dom, null)[value];
    }
    alert(getattr(box, "width"))


//alert(document.getComputedStyle((box,null).width)

    alert(getattr(box,"width"))
}

