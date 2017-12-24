var spans = document.getElementById("spans");
//spans.innerHTML = Math.floor(Math.random()*9000)+1000;//纯数字四位数随机；


//------------------24字母加0-9数字四位；
var str="abcdefghijklmnopqrstuvwxyz1234567890这首凉凉送给自己";
var str1="";
for(var i = 0;i<4;i++){
    str1+=str[Math.floor(Math.random()*str.length)];

}


spans.innerHTML=str1;


var test =document.getElementById("test"),
    password=document.getElementById("password"),
    username=document.getElementById("username"),
    button=document.getElementById("button");

button.onclick = function () {
    alert(username.value);
    if(username.value == "admin"){

        if (password.value == "1"){

           if (test.value==spans.innerHTML){

              location.href="www.baidu.com"

           }

            else {

               alert("验证码有误")
           }

        }

        else {

            alert("密码错误");

        }

    }else{

        alert("error");

    }



}