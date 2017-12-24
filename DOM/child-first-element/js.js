var too=document.getElementsByTagName("a")
for(var i = 0; i<too.length; i++){
    too[i].onclick=function () {
        this.parentNode.style.display="none";
    }

}