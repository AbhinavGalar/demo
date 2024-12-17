const array1 =[1,2,3,4,5,6];
// array literal
// const array2 = new Array[50,100,150,200];
// console.log(array2);
const arry=[];
arry[0]="happy";
arry[1]="new";
arry[2]="year";
console.log(arry);

const fruits =["apple ,banana ,pineapple orange"];
const mixed =[1,2,"hello",{name :"jhon"},[10,20,30]];
console.log(mixed[3].name);
console.log(mixed[4][1]);

//    let flen = fruits.length; 
//    let text =" ";  
// for (let i=0; i<flen ; i++){
//     text +=`<li>${fruits[i]}</li>`;
// }
// text ="<ol>";
// document.body.innerHTML= text; 

// push and unshift 
// push method adds elemnts to the begning of the array 
// fruits.push("dragonfruits");
// fruits.unshift("straberry");
// console.log(fruits);

// pop  and shifts
// pop shifts removes an elemts from the end the arrat 
// fruits.pop();
// console.log(fruits);

// // push 
// fruits.push ();
// console.log(fruits);

// slice method (starting index ,ending index not included)
const extracted = fruits.slice(1,4);
console.log(extracted);
console.log(fruits);
// splice method (starting index, deletecount , other string ) can  be used to remove as well as add in the string 
fruits.splice(2,3,"lemon", "cherry");
console.log(fruits);


fruits.splice(2,0,"grapes","papaya");
console.log(fruits);