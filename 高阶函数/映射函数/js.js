//操作一个数组，不动原来数组，返回一个新的数组
//map
function map(fn,array) {
    var  brr=[];
    forEach(array,function(element){
        brr.push(fn(element));
    })
    return brr;
}

function forEach(arr,fn){
    for(var i=0;i<arr.length;i++){
        fn(arr[i]);
    }
}

alert( map(Math.round,[1.1,2.2,3.3]));