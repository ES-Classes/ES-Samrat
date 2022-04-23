let x=50;
if(x<50){
    let y= 89;//variable define using let in the block is a local variable
    console.log(y)
}
else if(x<70){

}
else{

}
//switch demo
let currentTime=new Date();
let day=currentTime.getDay();
// let day =new Date();
console.log(day);
let date=3;
switch(date){
case 1:
console.log("sunday");
break;
case 2:
console.log("monday");
break;
case 3:
    console.log("tueday");
    break;
}


