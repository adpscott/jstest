var hours=document.getElementById("hours");
var min=document.getElementById("min");
var sec=document.getElementById("sec");

fn();

setInterval( function () {

    fn();

},1000)

function fn(){

    var date = new Date();

    hours.innerHTML=time(date.getHours());
    min.innerHTML=time(date.getMinutes());
    sec.innerHTML=time(date.getSeconds());

}

function time(str){
 if( str<10 ){
     return "0" + str;
 } else {
     return str;
 }
}


