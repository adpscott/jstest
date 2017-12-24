//实现两次调用//刷新页面与拖动滚动条

window.onload=function () {
    waterFall("main","box");
    var dataImg = {
        datas:[
            {"src":"1.jpg"},
            {"src":"2.jpg"},
            {"src":"3.jpg"},
            {"src":"4.jpg"},
            {"src":"5.jpg"},
            {"src":"6.jpg"}

        ]

    }


 window.onscroll =function () {
     if ( scrollTop() ) {
         for(var i=0;i<dataImg.datas.length;i++) {
             var main = document.getElementById("main");

             var oDiv = document.createElement("div");
             oDiv.className = "box";

             var oPic = document.createElement("div");
             oPic.className = "pic";

             var imgs = document.createElement("img");
             imgs.src = "images/"+dataImg.datas[i].src;

             main.appendChild(oDiv);
             oDiv.appendChild(oPic);
             oPic.appendChild(imgs);
         }
         waterFall("main", "box");
     }

 }

 function scrollTop(){
     var oBox = getClass("box");
     var oBoxLast = oBox[oBox.length-1];
     var top  =document.body.scrollTop||document.documentElement.scrollTop;
     var height  =document.body.scrollHeight||document.documentElement.scrollHeight;
     if(oBoxLast.offsetTop/2+oBoxLast.offsetTop<top+height){
         return true;
     }else{
         return false
     }



 }

}
function waterFall(main,box){
var main = document.getElementById("main");//父节点
var box = getClass(box);//子节点
//设置父节点宽度
//获取可视区域宽度
    var width= document.documentElement.clientWidth;
//每张图片的宽度
    var picWidth=box[0].offsetWidth;
    //可放入数量
    var num = parseInt(width/picWidth);
    //设置main的宽度；
    main.style.width=num*picWidth+"px";

  var hrr=[];
  for(var i=0;i<box.length;i++){
          if(i<num){
            hrr.push(box[i].offsetHeight);
          }else {
              var min = Math.min.apply(null,hrr);
              var index = inArray(hrr,min);
           box[i].style.position = "absolute";
           box[i].style.left = index*picWidth+"px";

            box[i].style.top = min+"px";
            hrr[index] = hrr[index]+box[i].offsetHeight;
          }
    }
}

function inArray(hrr,min) {
    for (var i = 0; i < hrr.length; i++) {
        if (hrr[i] == min) {
            return i;
        }

    }
}



function getClass(box){//ie 其他浏览器 获取
   var allElement =document.getElementsByTagName("*");
   var allClass =[];
   var reg = new RegExp("\\b"+box+"\\b");
   for(var i=0; i<allElement.length;i++){
       if (reg.test(allElement[i].className)){
           allClass.push(allElement[i]);
       }
   }
   return allClass;
}