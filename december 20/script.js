// spread opreator 
// it copies an object into  another object '
// it copies an array  elemtns into another array

const number =[1,2,3,4,5,6,7,8];
const number3=[10,20,30,40];
const number2=[...number,8,9,10,11,...number3];
console.log(number2);

const person={
    name:"harry",
    age:45,
    city:"hogwarts"
};

const nreperson={...person,hobby:"dance"};
console.log(nreperson);

// rest parameter (...)
// used in the function parameter to
     
 function display(...a){
    console.log(a);
 }
 display(10);
 display(10,20);
 display(10,20,30);


 function sum(...num){
    let total =0;
    // for(let i of num){
    //     total+=i;
    // }
    num.map((x));
    return total;
 }
 console.log(sum(10,20));
 console.log(sum(10,20,30));
