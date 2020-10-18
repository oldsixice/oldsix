//bmi
let markM;
markM = 60;
let markH;
markH =1.75;
let johnM;
johnM = 55;
let johnH;
johnH = 1.69;
markBMI = markM/(markH*markH);
console.log("mark的BMI:",markBMI);
johnBMI = johnM/(johnH*johnH);
console.log("john的BMI:",johnBMI);
console.log("Mark的BMI是否比John更高？");
console.log(markBMI > johnBMI);


// ball
var john = [89,120,103];
var sum=0;
for(var i = 0; i < john.length; i++){
    sum += john[i];
}
var mean1  = sum / john.length;
console.log("john:",mean1);

var mike = [116,94,123];
var sum=0;
for(var i = 0; i < mike.length; i++){
    sum += mike[i];
}
var mean2  = sum / mike.length;
console.log("mike:",mean2);

var mark = [97,134,105];
var sum=0;
for(var i = 0; i < mark.length; i++){
    sum += mark[i];
}
var mean3  = sum / mark.length;
console.log("mark:",mean3);

if(mean1 > mean2){
    console.log("john获胜");
}else{
    console.log("mike获胜");
}

if(mean2 > mean3){
    console.log("mike获胜");
}else{
    console.log("mary获胜");
}

//star
var str = "";
for(var i = 1; i <= 3; i++) {
    var blank = "",
        stars = "";
    for(var j = 0; j <= 3 - i; j++) { 
        blank += " ";
    }
    for(var k = 0; k < 2 * i - 1; k++) { 
        stars += "*";
    }
    str = str + blank + stars + "\n";
}
for(var i=4;i>0;i--){
    var blank = "",
        stars = "";
    for(var j=0;j<=3-i;j++){
        blank+=" ";
    }
    for(var k=0;k<2*i-1;k++){
        stars+="*";
    }
    str = str + blank + stars + "\n";
}
console.log(str);