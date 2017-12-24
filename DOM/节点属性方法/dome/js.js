var imgs = document.getElementById("imgs");

function  fn(max,min){

var str = Math.random()*(max-min)+min;

return str;

}


imgs.setAttribute("style", "width:"+fn(10,100)+"px; posriion:absolute; left:"+fn(0,1300)+"px; top:"+fn(0,650)+"px");


































