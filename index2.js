console.log("chaliye shuru krte h");
// const rectangle={
//     length:1,
//     breadth:2,

// draw: function() {
//     console.log('draw');
// }

// };
// function createRectangle(length,breadth){
//     const rectangle={
//         length,
//         breadth,
    
//     draw() {
//         console.log('draw');
//     }
    
//     };
//     return rectangle;
// } 
// let rect=createRectangle(5,6);
// let rect2=createRectangle(33,7);
// let rect3=createRectangle(11,9);
// //constructor function
// function Rectangle(len,bre){
//    this.length1=len;
//    this.breadth1=bre;
//    this.draw1=function(){
//     console.log('drawing a new rectangle');
//    }
// }
// let rectangleObject=new Rectangle(9,5);
// //dynamic nature of object-->add new property or remove new property fron pre prepared object
// rectangleObject.color='blue';
// console.log(rectangleObject);
// delete rectangleObject.color;
// console.log(rectangleObject);
// let Rectangle1= new Function('length','breadth',
//    `this.length1=length;
//    this.breadth1=breadth;
//    this.draw1=function(){
//     console.log('drawing a new rectangle');
//    }`
// );
// let rr=new Rectangle1(56,97);
// console.log(rr);
// let a={value:10};
// let b=a;
// let c=a++;
// a.value++;
// console.log(a.value);
// console.log(b.value);
// console.log(c);
// let  a=10;
// function inc(a){
//    a++;
// };
// inc (a);
// console.log(a);//yaha iss function ka alag a bana h copy pass hue h iski yaha
//reference ke case ma adress pass hota naam chahe change ho jaye
let square={
    side:3,
    area:9,
};
//for in loop
for(let key in square){
    //keys are reflected through key variable
    //values are reflected through square[key]
    console.log(key,square[key]);
}
//for of loop is applicable on iterables(arrays,maps)
// for(let key of Object.entries(square)){
//     console.log(key);
// }
if('side' in square){
    console.log('Present');
}
else{
    console.log('Absent');
}
//object cloning by iteration  
// let src={value:10};
// let dest={};
// for(let key in src){
//     dest[key]=src[key];
// }
 //object cloning by assign
//  let d1= {
//     a:10,
//     b:20,
//     c:30,
//  };
//  let d2= Object.assign({},d1);
//  console.log(d2);
//  d1.a++;
//  console.log(d1);
//  console.log(d2);
 // object cloning by spread method
 let src2={
    haha:100,
    roro:200,
 }
 let src3={
    nana:-1,
 }
 let d3={...src2};
 console.log(d3);
 src2.haha+=2;
 console.log(src2);
 console.log(d3);