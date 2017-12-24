/*var box = document.getElementById("box");
//节点（）div

var uls = document.getElementById("uls");

var lis = uls.getElementsByTagName("li");

for(var i = 0; i<lis.length; i++){

    lis[i].style.background="red";

}*/


//封装函数实现获取到class名的节点；

//var dom = document.getElementsByTagName("*")

function fn(className){
//选取所有节点
//每一个节点class名称和参数ClassName比较
//如果一样，添加到数组中
//return 啊啊啊【】；
    var arr=[];
    var dom = document.getElementsByTagName("*")
    for(var i = 0; i<dom.length; i++){

        if(dom[i].className==className||dom[i].className.indexOf(""+className)!=-1||dom[i].className.indexOf(className+"")!=-1){

            arr.push(dom[i]);
        }

    }

     return arr;

}

for(var i = 0; i<fn("lis").length; i++){

    fn("lis")[i].style.background="red";
}

