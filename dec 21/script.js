const number=[1,2,3,4,5];

// old way
const num1=number[0];
const num2= number[1];

// new way
const [a,b,c,d]= number;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// destruction with spread opreator

const[x,y,...num]=number;
console.log(x);
console.log(y);
// it is a javascript expression which extracts value of array and properties from objects
// object 
const person={
    name:"abhinav",
    age:"19",
    city:"bpl"
}
const {name,age,city}=person;
console.log(name);
console.log(age);
console.log(city);
// loops 

