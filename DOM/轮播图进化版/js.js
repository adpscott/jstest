//鼠标一入一出 显示淡出

var con = document.getElementById("con");
var left =  document.getElementById("left");
var right=  document.getElementById("right");
var usl =document.getElementById("uls");
var lis = uls.getElementsByTagName("li");
var index=0;
var ols = document.getElementById("ols");
var olis = ols.getElementsByTagName("li");//olis是下方圆形点，ol下的里i标签

con.onmouseover = function () {
    left.style.display="block";
    right.style.display="block";
}

con.onmouseout= function () {
    left.style.display="none";
    right.style.display="none";
}


//左右点切换

right.onclick=function () {
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = "none";
    }
    index++;

    if (index > lis.length - 1) {
        index = 0;
        lis[index].style.display = "block";
        olis[index].className = "bg";
        olis[lis.length - 1].className = "none";
    }
    else {
        lis[index].style.display = "block";
        olis[index].className = "bg";
        olis[index - 1].className = "none";

    }

//左边移动
    left.onclick = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.display = "none";
        }
        index--;
alert(index);
        if (index < 0) {
            index = olis.length - 1;
            lis[index].style.display = "block";
            olis[0].className = "none";
            olis[index].className = "bg";
        }
        else{
            lis[index].style.display = "block";
            olis[index].className="bg";
            olis[index+1].className="none";
        }
    }
}

//下方红点切换图片
