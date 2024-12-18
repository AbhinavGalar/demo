const fruits= ["apple" ,"banana","kiwi","mango"];
// sort method it sorts the items alphabetically

fruits.sort();
console.log(fruits);
// reverse method it reverse the items of an array
fruits.reverse();
console.log(fruits);

const number =[100,3,5566,299,9584386,4285];
number.sort(function(a,b){
    return a-b; 
    // accending order 
});

console.log(number);
number.reverse();
console.log(number);

// to string -to convert an array to a string
// const newFruits =fruits.toString();
// console.log(newFruits,typeof newFruits);


// join  method -to jooin the elemnt of an 
// array into a string with a seprator 
const joinedArray= fruits.join("*");
console.log(joinedArray);



const students =[
    {name :"lovekush", course:"frontend", city:"bhopal"},
    {name :"rajiv ", course:"frontend", city:"bhopal"},
    {name :"sudhnasu", course:"frontend", city:"itarsi"},
    {name :"harsh", course:"frontend", city:"bhopal"},
    {name :"abhinav", course:"frontend", city:"bhopal"},
    {name :"snadep", course:"frontend", city:"bhopal"},

];
function display (){
    let table =`
    <table border ="1px" width="600px" bgcolor="lightblue">
    <tr>
    <th>name</th>
    <th>course</th>
    <th>city</th>
    </tr>
    `;
    students.map(function(y){
       table +=`
       <tr>
       <td>${y.name}</td>
       <td>${y.course}</td>
       <td>${y.city}</td>
       `
         
    })
    table +="</table>";
    document.getElementById("demo").innerHTML=table;
}