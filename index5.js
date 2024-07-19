//console.log('pagal ho gye ho kya');
// function count(a){
//     console.log('hii');
// }
// //function call or invoke
// count();
//function assignment
// let c=function walk(){
//     console.log('running');
// }
// c();//yaha hoisting nhi hogi
// //hoisting  code ko execute krte time saare functions ko alag kr deta h or sabse pehle unhe code ke top pr bhrj deta h 
// let jump=c;
// jump();
//anonymous function assignment
// let i=function(){
//     console.log('hii everyone');
// }
// i();
//hoisting-it is the process of moving function declaration to the top of file,it is done automatically by js engine
// function sum(){
//     let total=0;
//    for(let value of arguments){
//        total=total+value;}

//        return total;
   
    //console.log(arguments);///arguments is an object
    //return a+b;
//}
// console.log(sum());//undefined + undefined
// console.log(sum(1,2,3,4,5));
// let r=sum(1,2);
// console.log(r);
//rest operator
// function s(num,value,...args,given){
//     console.log(num,value);
//    console.log(args);
// }
// s(1,2,3,4,5,6);
//default parameters
// function si(p,r=5,t=10){
//     return p*r*t/100;
// }
// console.log(si(100,undefined,1));
// //getter and setter
// let person={
//     fname:'Gourang',
//     lname:'Gautam'
// }
// console.log(person);
// function fullName(){
//     return `${person.fname} ${person.lname}`; 
// }
// console.log(fullName());
//getter->to access properties
//setter->change or mutate properties
// let person={
//     fname:'gourang',
//     lname:'gautam',
//     get fullName(){
//         return `${person.fname} ${person.lname}`;
//     },
//     set fullName(value){
//         // if(typeof value!=String){
//         //     throw new Error("you have not sent a string");
//         // }
//         let parts=value.split(' ');
//         this.fname=parts[0];
//         this.lname=parts[1];
//     }
// }
// // person.fullName='isha gupta';
// // console.log(person.fullName);
// //try and catch block for error handling
// try{
//     person.fullName=1;
// }
// catch(e){
//     alert("you havenot sent a string");
// }
// console.log(person.fullName);
//scope
// {
//     var a=5;
// }
// console.log(a);
//reducing an array
let arr=[-1,-2,-3,-4,-5];
let total=0;
let totalSum=arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(totalSum);


