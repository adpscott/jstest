var arr= [3,2,1,1,1,66,100,120,54512,546512345,31451]

//大小顺序；
for (var i=0; i<arr.length; i++){
    for(var j=i+1; j<arr.length; j++) {


        if (arr[i] > arr[j]) {
               var brr = arr[i];
               arr[i]=arr[j];
               arr[j]=brr;
        }
    }
}

document.write(arr)