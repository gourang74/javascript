console.log('hii everybody');
//collection of items is array which can be of different type
let num=[1,6,7,5];
num[1]=9;
console.log(num[1]);
//end ->push,begin->unshift,middle->splice(index,how many remove,numbers which are adding)
// num.push(10);
// num.unshift(8);
// num.splice(2,0,'la','ha','pa');
// console.log(num);
//searching
//console.log(num.indexOf('la'));
//we want the num exist in array or not
// if(num.indexOf(10)!=-1){
//     console.log('present');
// }
// console.log(num.includes(11));
// console.log(num.indexOf(1,2));
// let courses=[
//     {no:1,naam:'Love'},
//     {no:2,naam:'gaurav'}
// ];
// console.log(courses);
// console.log(courses.indexOf({no:1,naam:'Love'}));//here it is object/reference it is here non privitive
//call back function for non primitives
//predicate function
// let course1=courses.find(function(course){
//         return course.naam=='ll'
// });
// console.log(course1);
//arrow function
// let want=courses.find(course=> course.no==2);
// console.log(want);
// let body=[{part:1,name:'leg'},
//     {part:2,name:'hand'},
//     {part:3,name:'ear'}
// ]
// let str=body.find(function(str){
//     return str.name=='ear'
// });
//console.log(str);
// let nice=body.find(nice=>nice.name=='ear');
// console.log(nice);
//removing element in an array
//end remove -->pop(),beginning-->shift(),middle-->splice
// let arr=[1,2,3,4,5,6];
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr.splice(3,2));
// console.log(arr);
//emptying an array
//let numbers=[1,,2,3,4,5,6];
//numbers=[];
//numbers2=numbers;//yaha value copy nhi hui address pass hua h mtlb numand num2 dono ek hi address ko pint kr rhe h
//numbers.length=0;
// numbers.splice(0,numbers.length);
// console.log(numbers);
// console.log(numbers2);
//combining and slicing arrays
// let first=[1,2,3];
// let second=[4,5,6];
//let combine=first.concat(second);
// console.log(combine);
// console.log(first);
//array slice
// let sliced=combine.slice(2,4);
// console.log(sliced);
// console.log(combine);
//spread operator
// let combined =[...first,'a','b','true',...second,'false'];
// console.log(combined);
//making copy 
//let another=[...combined];
//iterating in array ->for of loop
// for (let value of another){
//     console.log(value);
// }
//let number=[23,34,45,56,67];
//for each loop
// number.forEach(function(x){
//     console.log(x);
// });
//  number.forEach(x=>console.log((x))); 
//joning arrays
// const joined=number.join(',');
// console.log(joined);
// let message='This is my first message';
// let parst=message.split(' ');
// console.log(parst);//this method creates a array of words which are separated by space
// let jion=parst.join('-');
// console.log(jion);
//filtering arrays
// let y=[1,-2,3,4,-5,6,-7];
// let h = y.filter(function(value){
// return value>=0}
// );
// console.log(h);
//mapping-map each element of array to something else
// let r=[1,2,3,4,5,6];
// let roll=r.map(function(value){
//     return 'student_no' +' '+value
// });
// console.log(roll);
//maping with objects
// let b=[1,2,-6,-9];
// let filtered=b.filter(value =>value>=0);
// console.log(filtered);
// let items=filtered.map(function(value){
//     return {num:value}
// });
// console.log(items);
//chaining
// let b=[1,2,-6,-9];
//  let filtered=b.
//  filter(value =>value>=0);
//  console.log(filtered);
//  let items=filtered
//  .map(function(value){
//      return {num:value}
//  }); 









