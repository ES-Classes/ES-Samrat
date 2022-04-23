let x=90;
// x++;
// ++x;
console.log(x++);

let y=90;
console.log(++x);
//unary operator 
let z=!x;
console.log(z);
//finr if  number is even or odd
let isEven=x % 2==0;//13%2
isEven =x & 1==0;
//x=7
///1000&0001=0000=0
let p=x<<1;
console.log(p)
let q =y>>1;
console.log(q);

let r=~isEven
//comprassion
let s=x=='90';
let ss=x!=='90';
console.log(s)
console.log(ss)
//logical 
let t =s && ss;
console.log(t)
t=false && anything;
t=s||ss;
t=true||ss;
const u=x??"samrat";//Nullish (nulll or underfined)coalwscing operator

let v=x==90?45:89;
console.log(v)
let w=x++ +45>>2<=34^4&9;
console.log(w)