window.onload=function(){
waterfall("main","box");
    window.onscroll = function(){
        if(scrollTop()){
                var main = document.getElementById("main");

                var oDiv = document.createElement("div");
                oDiv.className = "box";

                var oPic = document.createElement("div");
                oPic.className = "pic";

                var imgs = document.createElement("img");
                imgs.src = "images/1.jpg";

                main.appendChild(oDiv);
                oDiv.appendChild(oPic);
                oPic.appendChild(imgs);
            }

        waterfall("main","box");

    }
}
function scrollTop(){

    var oBox = getClass("box");
    var oBoxlast = oBox[oBox.length-1];
    var top = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.body.clientHeight || document.documentElement.clientHeight;

    //要使用 scrollWidth，取 document.documentElement.scrollWidth 与 document.body.scrollWidth 的最大值；
   // 要使用 clientWidth，如果 document.documentElement.clientWidth > 0，则使用 document.documentElement.clientWidth，否则使用 document.body.clientWidth。

    if(oBoxlast.offsetHeight/2+oBoxlast.offsetTop < top+height){
          return true;
    }else{
          return false;
    }
}

function waterfall(parent,box){

    var oParent = document.getElementById(parent);
    //获取到父节点
    var oBox = getClass(box);
    //获取到box子节点
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var oBoxWidth = oBox[0].offsetWidth;
    var num = Math.floor(width/oBoxWidth);
    oParent.style.width = num*oBoxWidth+"px";

    var hrr= [];
    for(var i=0;i<oBox.length;i++){
        if(i<num){
            hrr.push(oBox[i].offsetHeight);
        }else{
            var min=Math.min.apply(null,hrr);
            var index = inArray(hrr,min);

            oBox[i].style.position = "absolute";
            oBox[i].style.left =  index*oBoxWidth+"px";
            oBox[i].style.top = min+"px";
            hrr[index] += oBox[i].offsetHeight;
        }
    }
    console.log(hrr);
}

function inArray(hrr,min){

    for(var i=0;i<hrr.length;i++){

        if(hrr[i] == min){
            return i;
        }
    }
}


function getClass(box){  //获取class名称节点的函数
    var doms = document.getElementsByTagName("*");
    var reg = new RegExp("\\b"+box+"\\b");
    var arr = [];
    for(var i=0;i<doms.length;i++){
        if( reg.test( doms[i].className  ) ){
            arr.push(doms[i]);
        }
    }
    return arr;
}













