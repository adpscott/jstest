var arr = [
    "北京",[
        "海淀",[ "海淀1","海淀2","海淀3"],
        "朝阳",[ "朝阳1","朝阳2","朝阳3" ]
    ],
    "山东",[
        "济南",["济南1","济南2","济南3" ],
        "aes",["aes1","aes2","aes3"]

    ],
    "河北",[
        "保定",["保定1","保定2","保定3"],
        "石家庄",["石家庄1","石家庄2","石家庄3"]
    ]
];

var pro = document.getElementById("pro");
var city = document.getElementById("city");
var county = document.getElementById("county");
for(var i=0;i<arr.length;i++){

    if (typeof arr[i]=="string") {
 //  var  option = document.createElement("option");
 //  option.innerHTML=arr[i];
 //  pro.appendChild(option);

        pro.add(new Option(arr[i],arr[i]));
    }
}

pro.onchange = function() {
    for (var i = 0; i < arr.length; i++) {

        if (typeof arr[i] == "string") {

            if (pro.value == arr[i]) {
                var brr = arr[i + 1];
                city.innerHTML="";
                city.add(new Option("请选择"),-1);
                for (var j = 0; j < brr.length; j++) {
                    if (typeof brr[j] == "string") {

                       city.add(new Option(brr[j], brr[j]));
                    }
                }
            }
        }
    }
}



city.onchange = function() {
    for(var i = 0;i<arr.length;i++){
        if (typeof arr[i]=="object"){
           var brr = arr[i];
           for(var j = 0; j<brr.length; j++){
               if(typeof brr[j]=="string"){

                   if(brr[j]==city.value){
                       county.innerHTML="";
                       var crr= brr[j+1];
                       for(var k = 0; k<crr.length; k++){
                        county.add(new Option(crr[k],crr[k]));
                       }
                   }
               }
           }
        }
    }
}







