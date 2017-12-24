var tel = document.getElementById("tel");
//手机号11位
//手机号1开头
//第二位345678   ；
tel.onblur = function(){
    var regTel = /^1[3-8]\d{9}$/;
    if(  regTel.test(this.value)   ){
        this.nextElementSibling.innerHTML="right";
    }else {
        this.nextElementSibling.innerHTML="no";
    }
}

var userName = document.getElementById("userName");
userName.onblur = function () {
    var regUserName = /^\w{6,12}$/;
    if(  regUserName.test(this.value)   ){
        this.nextElementSibling.innerHTML="right";
    }else {
        this.nextElementSibling.innerHTML="no";
    }

}


var email = document.getElementById("email");

email.onblur = function () {
   var regEmail=/^\w{6,12}@\w{2,6}\.[0-9a-zA-Z]{2,5}$/;
    if (regEmail.test(this.value)){
       email.nextElementSibling.innerHTML = "rigth";
    }
    else{
        email.nextElementSibling.innerHTML="no";
    }
}
























