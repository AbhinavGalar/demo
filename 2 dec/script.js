var todaydate = new Date();
console.log(todaydate);

var tday = todaydate.getDay();
console.log(tday);

let day;

switch(tday)
{
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "thersday";
        break;
    case 5:
        day = "friday";
        break;  
    case 6:
        day = "saturday";
        break;              
}
var show = document.getElementById("demo").innerHTML = today is : ${day};
console.log(today is : ${day})

// object

const person = {
    firstName : "sudhanshu",
    lastName : "mehto",
    display : function(){
        return this name ${this.firstName} ${this.lastName} is from display function;
    },
}
console.log(person.firstName + " " + person.lastName);
console.log(person.display());

const data1 = {
    name: "sudhanshu mehto",
    city: "itarsi",
    age: 19,
    show: function(){
        return my name is : ${name} and my age is : ${age};
    },
}

var display = document.getElementById("demo2")
display.innerHTML = data1.name+" "+data1.city+" "+data1.age;

function give(){
    console.log(data1.show());
}