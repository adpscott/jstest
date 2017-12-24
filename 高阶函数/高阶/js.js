var arr = [1,2,3,4,5,6];

function filert(arr,fn) {
    var brr = [];
    for(var i =0; i<arr.length;i++){
        if (fn(arr[i])){
            brr.push(arr[i]);
        }
    }
    return brr;
}

console.log( filert(arr,function(value){
    return value<3;

})  );

function forEach(arr,fn){
   // var brr = [];
    for (var i =0; i<arr.length;i++){
    //    fn(arr[i]).value+=0;
       fn(arr[i]);
    }
  //  return brr
}

forEach(arr,function (value) {
    console.log("asx"+value+"asx");
})