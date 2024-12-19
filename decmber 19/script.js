// const actor =[
//     {name:"sharukh khan" , location:"mumbai"},
//     {name:"salman bhai" , location:"mumbai"},
//     {name:" puneet suprerstar" , location:"bihar "},
//     {name:"peter parker " , location:"New York"},
//     {name:"walter white " , location:"new york"},
    
// ];

// function show(){
//     let table=`
//     <th>
//     <tb>name</tb>
//     <tb>location</tb>
//     `;
// }

// actor.map (function(y){
//     table +=`
//     <tr>
//     <tb>${y.name}</tb>
//     <tb>${y.location}</tb>
//      </tr>
//      `;
     
// })



// map returns a new array
// foreach does not return a new array just works or the emlents 
// filtert 
const number =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const filternum=number.filter(function(num){
    return num % 2===0;
});

console.log(filternum);


const newnum=[10,26,33,22,44,4444,5556,7777,543446,788666];
const filternewnum=number.filter(function(y){
    return newnum>=50;
});
console.log(filternewnum);

// date formalts

let  d= new Date();
console.log(d);

// months 0-11, days 0-6
// year ,month ,date ,hour ,minutes ,second ,milisecond

d= new Date(2020,11,23,12,34,45,3000);
d = new Date (2020,15,45,12,34,45,3000);
// year ,month date,hour ,minutes ,second
d= new Date(2020,15,45,12,)

const today= new Date();
// date methods
const year =today.getFullYear();
console.log(year);

const month=today.getMonth();
console.log(month);

const  day =today.getDate();
console.log(day);
