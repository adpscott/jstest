//reduce 用一个函数调用另一个函数，让数组变字符创
function Reduce(add,num,array) {
//add代表+函数
    forEach(array,function(value){
        num = add(num,value);
    })
    return num;
}

function add(num1,num2){
    return num1+num2;
}

function forEach(arr,fn){
    for (var i=0;i<arr.length;i++){
        fn(arr[i]);
    }
}

var arr= [1,2,3,4,5];
alert(
    Reduce(add,2,arr)
);