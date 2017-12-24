var arr=["米饭","面条","咸鸭蛋"];


var btn = document.getElementById("btn"),
  stop = document.getElementById("stop"),
  box = document.getElementById("box"),
  index = 0,
  time = null;


btn.onclick = function(){

   time =  setInterval(function(){

        box.innerHTML =arr[index];

         index++;
        if(index>arr.length-1){
            index=0;
        }


     },200);

   alert("开始念经");
}


stop.onclick = function () {

    clearInterval( time );
  alert("stop!!!!!!!!")
}
